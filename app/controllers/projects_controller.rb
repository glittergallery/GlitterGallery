require 'grit'

class ProjectsController < ApplicationController
  before_filter :store_return_to
  before_filter :authenticate_user!, except: [:show, :commits, :projectcommit, :masterbranch, :file_history, :pulls, :pull]

  def new
    @project = Project.new
    @projects = current_user.projects
  end

  def index
    @projects = Project.where(private: nil).where.not(user_id: current_user.id)
  end

  def destroy
    @project = Project.find params[:id]
    if current_user.id == @project.user_id
      @project.destroy # There is an after_destroy callback in the Project model that deletes the files.
      flash[:notice] = "It has been destroyed!"
      redirect_to dashboard_path
    else
      flash[:error] = "You don't have permission for this command!"
      redirect_to @project.urlbase
    end
  end

  def create
    project = Project.new project_params
    project.user_id = current_user.id
    if params[:commit]=="Private"
      project.private = true
      project.uniqueurl = SecureRandom.hex
    end
    if project.save
      project.parent = project.id
      project.save
      unless project.private
        notification = Notification.new(:actor => current_user, :action => 4, :object_type => 0, :object_id => project.id)
        notification.victims << current_user.followers
        notification.save!
      end
      redirect_to project.urlbase
    else
      flash[:alert] = "Didn't save project!"
      redirect_to new_project_path
    end
  end

  def follow
    @user = User.find_by username: params[:username]
    @project = Project.find_by user_id: @user.id, name: params[:project]
    unless @user == current_user
      if ProjectFollower.where(:follower => current_user, :followed_project => @project).empty?
        ProjectFollower.create(:follower => current_user, :followed_project => @project)
        Notification.create(
          :actor => current_user,
          :action => 1,
          :object_type => 0,
          :object_id => @project.id,
          :victims => [@project.user]
        )
      end
      flash[:notice] = "You're now following #{@user.username}/#{@project.name}"
    else
      flash[:notice] = "You're the owner of this project, you automatically receive updates."
    end
    redirect_to @project.urlbase
  end

  def show
    @user = User.find_by username: params[:username]
    @project = Project.find_by user_id: @user.id, name: params[:project]
    if Rails.env.production?
      @invite_uri = "sparkleshare://#{ENV['OPENSHIFT_APP_DNS'].downcase}/projects/#{params[:id]}/invite.xml" # If it's in production.
    else
      @invite_uri = "#{Rails.root}/uploads/#{Rails.env}/projects/#{params[:id]}/invite.xml" # If not in production.
    end
    @images = []
    barerepo = @project.barerepo
    unless barerepo.empty?
      headcommit = barerepo.head.target
      headtree = barerepo.lookup(headcommit.tree_id)
      headtree.each do |blob|
        link = File.join(@project.urlbase,'master',blob[:name])
        @images.push({
           :link => link,:name => blob[:name],:url => @project.imageurl(blob[:name])
        })
      end
    end
    @comments = Comment.where(polycomment_type: "project", polycomment_id: @project.id)
    @comments = pg @comments, 10
    @comment = Comment.new
    @ajax = params[:page].nil? || params[:page] == 1
  end

  def user_show
    @user = User.find_by username: params[:username]
    @projects = @user.projects
  end

  def commits
    @user = User.find_by username: params[:username]
    @project = Project.find_by user_id: @user.id, name: params[:project]
    @commits = []
    unless @project.barerepo.empty?
      walker = Rugged::Walker.new(@project.barerepo)
      walker.push(@project.barerepo.head.target)
      walker.each { |c| @commits.push(c) }
    end
    @comments = Comment.where(polycomment_type: "commit", polycomment_id: params[:tree_id])
    @comments = pg @comments, 10
  end

  def projectcommit
    @user = User.find_by username: params[:username]
    @project = Project.find_by user_id: @user.id, name: params[:project]
    @images = []
    barerepo = @project.barerepo
    unless barerepo.empty?
      tree = barerepo.lookup(params[:tree_id])
      tree.each do |blob|
        link = File.join(@project.urlbase,'master',blob[:name])
        data = barerepo.read(blob[:oid]).data
        @images.push({
          :link => link,:data => data,:name => blob[:name]
        })
      end
    end
    @comments = Comment.where(polycomment_type: "commit", polycomment_id: params[:tree_id])
    @comment = Comment.new
    @id = params[:tree_id]
  end

  # Given a filename, view the state of the file in master.
  # Since we aren't doing much branch hopping on the app itself, this
  # is useful for fetching the current state of a file in a project.

  def masterbranch
    @user = User.find_by username: params[:username]
    @project = Project.find_by user_id: @user.id, name: params[:project]
    @imageurl = File.join @project.satellitedir, params[:image_name]
    @comments = Comment.where(polycomment_type: "file", polycomment_id: params[:image_name])
    @comments = @comments.paginate(page: params[:page], per_page: 10)
    @comments = pg @comments, 10
    @comment = Comment.new
    @ajax = params[:page].nil? || params[:page] == 1
  end

  # Given a filename, view it's entire commit history, including author
  # information, etc. Only one file's history may be viewed at a time, so
  # please note that this is different from the project's commit history.

  def file_history
    @user = User.find_by username: params[:username]
    @project = Project.find_by user_id: @user.id, name: params[:project]
    @bloblist = Array.new
    walker = Rugged::Walker.new(@project.barerepo)
    walker.push(@project.barerepo.head.target)
    walker.each do |commit|
      tree = @project.barerepo.lookup(commit.tree_id)
      tree.each do |blob|
        if blob[:name] == params[:image_name]
          blobdata = @project.barerepo.read(blob[:oid]).data
          image = {
            :name => blob[:name],
            :data => blobdata
          }
          @bloblist << [image , commit]
        end
      end
    end
  end

  # Sparkleshare integration.

  def invite
    @user = User.find_by username: params[:username]
    @project = Project.find_by user_id: @user.id, name: params[:project]
    mime_type = Mime::Type.lookup_by_extension('xml')
    content_type = mime_type.to_s unless mime_type.nil?
    @git_dir = "/#{@project.user.email}/#{@project.name}"
    render :layout => false, :content_type => content_type
  end

  # Let's users upload a new file to the project through a
  # different page. Original functionality used to exist in the
  # project show page, moved to a separate page now.

  def newfile
    @user = User.find_by username: params[:username]
    @project = Project.find_by user_id: @user.id, name: params[:project]
  end

  def update
    @user = User.find_by username: params[:username]
    @project = Project.find_by user_id: @user.id, name: params[:project]
  end


  # Let's users upload new files to the project. The new files are
  # also commited to the backend git repository. They're added to the non_bare
  # repo, and pushed to the bare_repo.
  # FIXME - work on the push from non_bare to bare repo method.
  # FIXME - allow uploads of only supported images.

  def file_upload
    @project = Project.find params[:id]
    tmp = params[:file].tempfile
    file = File.join @project.satellitedir, params[:file].original_filename
    FileUtils.cp tmp.path, file
    if params[:file]
      image_commit @project, params[:file]
      flash[:notice] = "Your new image was added successfully! How sparkly!"
    else
      flash[:alert]  = "Your new image didn't get saved! How sad :("
    end
    redirect_to @project.urlbase
  end

  # Update files using this function. Updated files get commited to the non_bare repo
  # and then pushed to the bare repo.
  # FIXME - allow uploads of only supported images.
  def file_update
    @project = Project.find params[:id]
    tmp = params[:file].tempfile
    file = File.join @project.satellitedir, params[:image_name]
    FileUtils.cp tmp.path, file
    if params[:file]
        imagefile = params[:file]
        message = params[:message]
        satellite_commit @project.satelliterepo, params[:image_name], imagefile.read, message
        @project.pushtobare
        flash[:notice] = "#{params[:image_name]} has been updated! Shiny!"
    else
      flash[:alert] = "Unable to update #{params[:image_name]}. The server ponies are sad."
    end
    redirect_to @project.urlbase
  end

  # Delete files using this function.
  def file_delete
    @user = User.find_by username: params[:username]
    @project = Project.find_by user_id: @user.id, name: params[:project]
    file = File.join(@project.satellitedir, params[:image_name])
    FileUtils.rm(file) if File.exists?(file)
    satellite_delete(@project.satelliterepo,params[:image_name])
    @project.pushtobare
    flash[:notice] = "#{params[:image_name]} has been deleted!"
    redirect_to @project.urlbase
  end

  # WIP - Supposed to help in forking a repo that belongs to another user.
  # Fork works but creates only bare repos.

  def fork
    @user = User.find_by username: params[:username]
    @project = Project.find_by user_id: @user.id, name: params[:project]
    @forked_project = Project.new :name => @project.name,
                                  :parent => @project.id
    @forked_project.user_id = current_user.id

    if @project.private
      @forked_project.private = true
      @forked_project.uniqueurl = @project.uniqueurl
    end

    if @forked_project.save
      @forked_project_saved = true
      if @forked_project_saved

        git = Grit::Git.new @forked_project.path
        git.native(clone,{}, File.join(@project.path, '.git'),@forked_project.path)

        unless @forked_project.private
          notification = Notification.new(:actor => current_user, :action => 2, :object_type => 0, :object_id => project.id)
          notification.victims << current_user.followers
          notification.victims << @project.user unless notification.victims.include?(@project.user)
          notification.save!
        end

        redirect_to @forked_project.urlbase

      else
        redirect_to dashboard_path
      end
    else
      flash[:alert] = "Didn't save project!"
      redirect_to dashboard_path
    end
  end

  # This function will be removed soon, just being used to test fork.

  def forkyou
    @user = User.find_by username: params[:username]
    @project = Project.find_by user_id: @user.id, name: params[:project]
    # what if X is trying to fork a project that was forked by Y from X?
    @forked_project = Project.new :name => @project.name,
                                  :parent => @project.id
    @forked_project.user_id = current_user.id

    if @forked_project.save
      @forked_project.urlbase = File.join "/#{current_user.username}", @forked_project.name.to_s
      if @project.private
        @forked_project.private = true
        @forked_project.uniqueurl = @project.uniqueurl
        @forked_project.urlbase = File.join @forked_project.urlbase, @forked_project.uniqueurl
      end
      @forked_project.save

      FileUtils.rm_r(@forked_project.path)
      FileUtils.cp_r(@project.path,@forked_project.path)

      redirect_to @forked_project.urlbase

    else
      flash[:alert] = "Didn't save project!"
      redirect_to dashboard_path
    end
  end

  #def pull_request
  # this one will make an entry into the pull request table
  # ID, project info, desc, upto_commitID, status <merge, close, open>
  # when a new request is opened, it will issue it as open
  # upon merge, it will make it as merge and make them nonclickable again
  # upon close, it will make it as closed but it may be re-opemed and merged
  #end

  #Pull request - WIP

  def pull_request
    @user = User.find_by username: params[:username]
    @forked_project = Project.find_by user_id: @user.id, name: params[:project]
    @parent_project = Project.find @forked_project.parent
    @parent_repo = Grit::Repo.init_bare_or_open(File.join (@parent_project.path) , '.git')
    @forked_repo = Grit::Repo.init_bare_or_open(File.join (@forked_project.path) , '.git')

    @fork_commits = []
    @forked_repo.commits.each do |c|
      @fork_commits << c.id
    end

    if @parent_repo.commits.first == @forked_repo.commits.first
      redirect_to @forked_project.urlbase
      flash[:notice] = "Nothing to pull, the parent project is up to date! :)"
    end

    unless @parent_repo.commits.first != nil and @fork_commits.include? @parent_repo.commits.first.id
      redirect_to @forked_project.urlbase
      flash[:alert] = "Hm, looks like you're left behind and we cannot do an auto merge :-("
    end

  end

  def handle_pull_request
    @forked_project = Project.find params[:id]
    @parent_project = Project.find @forked_project.parent
    @parent_repo = Grit::Repo.init_bare_or_open(File.join (@parent_project.path) , '.git')
    @forked_repo = Grit::Repo.init_bare_or_open(File.join (@forked_project.path) , '.git')

    @fork_commits = []
    @forked_repo.commits.each do |c|
      @fork_commits << c.id
    end

    if @parent_repo.commits.first == nil or @fork_commits.include? @parent_repo.commits.first.id
      request = PullRequest.new :desc => params[:description],
                                :fork => @forked_project.id,
                                :parent => @parent_project.id,
                                :status => 'open'
      if request.save
        # we want the directory containing all of the stuff in this request to be copied over.
        FileUtils.cp_r(@forked_project.path, @forked_project.path + request.id.to_s)
        redirect_to File.join(@parent_project.urlbase, 'pulls')
      else
        flash[:error] = "Damn, something went wrong. Please try again!"
        redirect_to dashboard_path
      end
    end
  end

  def pulls
    @user = User.find_by username: params[:username]
    @project = Project.find_by user_id: @user.id, name: params[:project]
    #spit a list of all pulls from the table which have @project.id as parent
    @pulls = PullRequest.where("parent=?",@project.id)
  end

  def pull
    @user = User.find_by username: params[:username]
    @project = Project.find_by user_id: @user.id, name: params[:project]
    @pull = PullRequest.find params[:pull_id]
    @comment = Comment.new
    @comments = Comment.where(polycomment_type: "pull", polycomment_id: @pull.id)
    @comments = pg @comments, 10
    @ajax = params[:page].nil? || params[:page] == 1
  end

  def merge
    @user = User.find_by username: params[:username]
    @project = Project.find_by user_id: @user.id, name: params[:project]
    @pull = PullRequest.find params[:pull_id]
    @forked_project = Project.find @pull.fork

    FileUtils.rm_r(@project.path)
    FileUtils.cp_r(@forked_project.path + @pull.id.to_s, @project.path)
    FileUtils.rm_r(@forked_project.path + @pull.id.to_s)

    @pull.status = 'merged'
    @pull.save

    flash[:notice] = "Pull request #{@pull.id} has successfully been merged!"

    @pulls = PullRequest.where("parent=?",@project.id)
    @pulls.each do |pull|
      if pull.id < @pull.id and pull.fork == @pull.fork and pull.status == 'open'

        FileUtils.rm_r(@forked_project.path + pull.id.to_s)

        pull.status = 'automatically merged'
        pull.save
      end
    end
    redirect_to @project.urlbase
  end

  def open
    @user = User.find_by username: params[:username]
    @project = Project.find_by user_id: @user.id, name: params[:project]
    @pull = PullRequest.find params[:pull_id]
    @pull.status = 'open'
    @pull.save
    redirect_to @project.urlbase
  end

  def close
    @user = User.find_by username: params[:username]
    @project = Project.find_by user_id: @user.id, name: params[:project]
    @pull = PullRequest.find params[:pull_id]
    @pull.status = 'closed'
    @pull.save
    redirect_to @project.urlbase
  end

  def new_svg
    @user = User.find_by username: params[:username]
    @project = Project.find_by user_id: @user.id, name: params[:project]
  end


  def create_svg
    @project = Project.find params[:id]
    filename = params[:filename].squish.downcase.tr(" ","_") + '.svg'
    file = File.open(File.join(@project.satellitedir, filename), 'w+') {|f| f.write(Base64.decode64(params[:sketch])) }
    if file
      satellite_commit @project.satelliterepo, filename, Base64.decode64(params[:sketch]), "Create #{filename}"
      @project.pushtobare
      flash[:notice] = "Your new image was added successfully! How sparkly!"
    else
      flash[:alert]  = "Your new image didn't get saved! How sad :("
    end
    redirect_to @project.urlbase
  end


  def edit_svg
    @user = User.find_by username: params[:username]
    @project = Project.find_by user_id: @user.id, name: params[:project]
    @filename = params[:image_name]
    @path = @project.imageurl(@filename)
  end

  def update_svg
    @project = Project.find params[:id]
    filename = params[:filename]
    file = File.open(File.join(@project.satellitedir, filename), 'w+') {|f| f.write(Base64.decode64(params[:sketch])) }
    if file
      message = params[:message]
      satellite_commit @project.satelliterepo, filename, Base64.decode64(params[:sketch]), message
      @project.pushtobare
      flash[:notice] = "#{filename} has been updated! Shiny!"
    else
      flash[:alert] = "Unable to update #{filename}. The server ponies are sad."
    end
    redirect_to @project.urlbase
  end

  def settings
    @user = User.find_by username: params[:username]
    @project = Project.find_by user_id: @user.id, name: params[:project]
  end

  private

  def project_params
    params.require(:project).permit(:name)
  end

end
