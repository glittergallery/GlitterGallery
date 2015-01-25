class ProjectsController < ApplicationController
  before_filter :store_return_to
  before_filter :authenticate_user!, except: [  :show,
                                                :commits,
                                                :projectcommit,
                                                :masterbranch,
                                                :file_history,
                                                :pulls,
                                                :pull
                                              ]

  def new
    @project = Project.new
  end

  #TODO Limit to popular/recent projects
  def index
    @projects = Project.where(private: nil)
  end

  def destroy
    @project = Project.find params[:id]
    if current_user.id == @project.user_id
      @project.destroy
      # after_destroy callback in project.rb deletes files.
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
    if params[:commit] == "Private"
      project.private = true
      project.uniqueurl = SecureRandom.hex
    end
    if project.save
      project.parent = project.id
      project.save
      unless project.private
        notification = Notification.new( actor: current_user,
                                         action: 4,
                                         object_type: 0,
                                         object_id: project.id
                                       )
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

  def file_history
    @user = User.find_by username: params[:username]
    @project = Project.find_by user_id: @user.id, name: params[:project]
    @bloblist = Array.new
    walker = Rugged::Walker.new @project.barerepo
    walker.push @project.barerepo.head.target
    walker.each do |commit|
      tree = @project.barerepo.lookup commit.tree_id
      tree.each do |blob|
        if blob[:name] == params[:image_name]
          blobdata = @project.barerepo.read(blob[:oid]).data
          image = { name: blob[:name],
                    data: blobdata
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


  def newfile
    @user = User.find_by username: params[:username]
    @project = Project.find_by user_id: @user.id, name: params[:project]
  end

  def update
    @user = User.find_by username: params[:username]
    @project = Project.find_by user_id: @user.id, name: params[:project]
  end

  # TODO - allow uploads/updates of only supported images.

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

  def settings
    @user = User.find_by username: params[:username]
    @project = Project.find_by user_id: @user.id, name: params[:project]
  end

  private

  def project_params
    params.require(:project).permit(:name)
  end

end
