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
  before_filter :return_context, except: [ :file_upload, :file_update,
                                           :new, :create, :destroy, :index,
                                           :user_show
                                         ]

  def new
    @project = Project.new
  end

  #TODO Limit to popular/recent projects
  def index
    @projects = Project.inspiring_projects_for current_user.id
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
      unless project.private
        # todo - clean up action ids, numbers makes unreadable
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

  def tree_at revision, path
    barerepo = @project.barerepo
    tree = Rugged::Commit.lookup(barerepo, revision).tree
    path == "/" ? tree.oid : tree.path(path)[:oid]
  end

  def show_blob_content
    barerepo = @project.barerepo
    branch = params[:branch] || 'master'
    @blob = barerepo.blob_at barerepo.last_commit.oid, params[:destination]
    @enc_blob_text = Base64::encode64 @blob.text
    @comments = Comment.where( polycomment_type: "blob",
                               polycomment_id: @blob.oid
                             )
    @comment = Comment.new
    @ajax = params[:page].nil? || params[:page] == 1
  end

  def supported_file_ext
    [".svg", ".png", ".jpg"]
  end

  def show_tree_content
    barerepo = @project.barerepo
    branch = params[:branch] || 'master'
    # todo - generalize for any branch -now it'll take anything
    @destination = params[:destination] || "/"
    tree = barerepo.lookup tree_at barerepo.last_commit.oid, @destination
    # todo - we can possibly merge @images & @inner_dirs,
    # but that will trouble during thumbnails for blobs
    @images = {}
    @inner_dirs = {}
    tree.each_blob do |blob|
      blob_name = blob[:name]
      blob_link = "#{@project.urlbase}/blob/master/#{@destination}/#{blob[:name]}"
      next unless supported_file_ext.include? File.extname(blob[:name]).downcase
      @images[blob_name] = blob_link.gsub("///","/")
    end

    tree.each_tree do |dir|
      dir_parent = @destination
      dir_name = dir[:name]
      @inner_dirs[dir_name] = File.join @project.urlbase, "tree", branch,
                                        dir_parent, dir_name
    end
  end

  def show
    @images = []
    barerepo = @project.barerepo
    unless barerepo.empty?
      headtree = barerepo.lookup barerepo.last_commit.tree_id
      #todo - what if there are trees inside this tree?
      headtree.each do |blob|
        link = File.join @project.urlbase, 'master', blob[:name]
        @images.push({
                        link: link,
                        name: blob[:name],
                        url: @project.imageurl(blob[:name])
                    })
      end
    end

    @comments = Comment.where( polycomment_type: "project",
                               polycomment_id: @project.id
                             )
    @comments = pg @comments, 10
    @comment = Comment.new
    @ajax = params[:page].nil? || params[:page] == 1
  end

  def user_show
    @user = User.find_by username: params[:username]
    @projects = @user.projects
  end

  #todo - rename this as log, reflect everywhere
  #todo - take different logging params, such as:
  #       oneline (only the commit messages/author)
  #       status (files added/removed in each commit)
  #       full (list all files in that commit as they list)

  # GET /username/project/network
  def network
    @root = @project.root
  end

  def commits
    @commits = []
    tree = "master" || params[:tree]
    unless @project.barerepo.empty?
      walker = Rugged::Walker.new @project.barerepo
      walker.push @project.barerepo.branches[tree].target
      walker.each { |c| @commits.push(c) }
    end
    @comments = Comment.where( polycomment_type: "commit",
                               polycomment_id: params[:tree_id]
                             )
    @comments = pg @comments, 10
  end

  #todo - rename this as commit, and change url tree/master/commit/oid
  def projectcommit
    @images = []
    barerepo = @project.barerepo
    unless barerepo.empty?
      tree = barerepo.lookup params[:tree_id]
      tree.each do |blob|
        link = File.join @project.urlbase,'master',blob[:name]
        data = barerepo.read(blob[:oid]).data
        @images.push({
                      link: link,
                      data: data,
                      name: blob[:name]
                    })
      end
    end
    @comments = Comment.where(
                               polycomment_type: "commit",
                               polycomment_id: params[:tree_id]
                             )
    @comment = Comment.new
    @id = params[:tree_id]
  end

  # Given a filename, view the state of the file in master.
  # Since we aren't doing much branch hopping on the app itself, this
  # is useful for fetching the current state of a file in a project.

  #todo - /tree/master/file_name and generalize for /tree/branch/file_name

  def masterbranch
    @imageurl = File.join @project.satellitedir, params[:image_name]
    @comments = Comment.where(
                               polycomment_type: "file",
                               polycomment_id: params[:image_name]
                             )
    @comments = @comments.paginate page: params[:page], per_page: 10
    @comments = pg @comments, 10
    @comment = Comment.new
    @ajax = params[:page].nil? || params[:page] == 1
  end

  def file_history
    @bloblist = Array.new
    walker = Rugged::Walker.new @project.barerepo
    walker.push @project.barerepo.head.target
    walker.each do |commit|
      tree = @project.barerepo.lookup commit.tree_id
      tree.each do |blob|
        if blob[:name] == params[:image_name]
          blobdata = @project.barerepo.read(blob[:oid]).data
          image = {
                    name: blob[:name],
                    data: blobdata
                  }
          @bloblist << [image , commit]
        end
      end
    end
  end

  def newfile
  end

  def update
  end

  # TODO - allow uploads/updates of only supported images.

  def file_upload
    @project = Project.find params[:id]
    if params[:file]
      params[:file].each do |f|
        tmp = f.tempfile
        file = File.join @project.satellitedir, f.original_filename
        FileUtils.cp tmp.path, file
        image_commit @project, f
        flash[:notice] = "Your new image was added successfully! How sparkly!"
      end
    else
      flash[:alert]  = "No image selected!"
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
        commit_id = satellite_commit @project.satelliterepo,
                         params[:image_name],
                         imagefile.read,
                         message
        generate_thumbnail @project, params[:image_name], commit_id
        @project.pushtobare
        flash[:notice] = "#{params[:image_name]} has been updated! Shiny!"
    else
      flash[:alert] = "Unable to update #{params[:image_name]}. The server ponies are sad."
    end
    redirect_to @project.urlbase
  end

  def file_delete
    file = File.join @project.satellitedir, params[:image_name]
    FileUtils.rm file if File.exists? file
    satellite_delete @project.satelliterepo,params[:image_name]
    @project.pushtobare
    flash[:notice] = "#{params[:image_name]} has been deleted!"
    redirect_to @project.urlbase
  end

  def open
    @pull = PullRequest.find params[:pull_id]
    @pull.status = 'open'
    @pull.save
    redirect_to @project.urlbase
  end

  def close
    @pull = PullRequest.find params[:pull_id]
    @pull.status = 'closed'
    @pull.save
    redirect_to @project.urlbase
  end

  def fork
    child = Project.new name: @project.name,
                        user_id: current_user.id,
                        uniqueurl: @project.uniqueurl,
                        parent: @project
    if @project.private
      child.private = true
      child.uniqueurl = SecureRandom.hex
    end

    if child.save
      redirect_to child.urlbase
      # todo - notifications
    else
      flash[:alert] = "Couldn't fork project. #{child.errors.full_messages.to_sentence}"
      redirect_to @project.urlbase
    end


  end

  def settings
  end

  private

  def project_params
    params.require(:project).permit(:name)
  end

  def return_context
    @user = User.find_by username: params[:username]
    unless @user.blank?
      @project = Project.find_by user_id: @user.id, name: params[:project]
    end
    if @project.blank?
      render file: "#{Rails.root}/public/404.html", layout: false, status: 404
    end  
  end

end
