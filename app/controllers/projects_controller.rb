class ProjectsController < ApplicationController
  before_filter :store_return_to
  before_filter :authenticate_user!, except: [:show,
                                              :commits,
                                              :projectcommit,
                                              :masterbranch,
                                              :file_history,
                                              :pulls,
                                              :pull
                                              ]

  before_filter :return_context, except: [:new,
                                          :create,
                                          :destroy,
                                          :index,
                                          :followed_index
                                          ]

  def new
    @project = Project.new
  end

  # TODO: Limit to popular/recent projects
  def index
    if params[:id]
      @user = User.find_by username: params[:id]
      @projects = @user.projects
      render :user_index
    else
      @projects = Project.inspiring_projects_for current_user.id
    end
  end

  def destroy
    @project = Project.find params[:id]
    if current_user.id == @project.user_id
      @project.destroy
      # after_destroy callback in project.rb deletes files.
      flash[:notice] = 'It has been destroyed!'
      redirect_to dashboard_path
    else
      flash[:error] = "You don't have permission for this command!"
      redirect_to @project.urlbase
    end
  end

  def create
    project = Project.new project_params
    project.user_id = current_user.id
    project.private = true if params[:commit] == 'Private'
    if project.save
      unless project.private
        notification = Notification.new(
          actor: current_user,
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

  # GET /id/followed/projects
  def followed_index
    @user = User.find_by username: params[:id]
    @projects = @user.followed_projects
  end

  # POST /user_id/id/follow
  def follow
    if @user != current_user
      current_user.follow_project @project
      flash[:notice] = "You're now following #{@user.username}/#{@project.name}"
    else
      flash[:notice] = "You're the owner of this project, " \
                       'you automatically receive updates.'
    end
    redirect_to @project.urlbase
  end

  # DELETE /user_id/id/unfollow
  def unfollow
    if ProjectFollower.remove_follow current_user, @project
      flash[:notice] = "You've successfully unfollowed " \
                       "#{@user.username}/#{@project.name}"
    else
      flash[:notice] = 'You were not following ' \
                       "#{@user.username}/#{@project.name}"
    end
    redirect_to @project.urlbase
  end

  def tree_at(revision, path)
    barerepo = @project.barerepo
    tree = Rugged::Commit.lookup(barerepo, revision).tree
    path == '/' ? tree.oid : tree.path(path)[:oid]
  end

  def show_blob_content
    barerepo = @project.barerepo
    @blob = barerepo.blob_at barerepo.last_commit.oid, params[:destination]
    @enc_blob_text = Base64.encode64 @blob.text
    @comments = Comment.where(
      polycomment_type: 'blob',
      polycomment_id: @blob.oid
    )
    @comment = Comment.new
    @ajax = params[:page].nil? || params[:page] == 1
  end

  def show
    @images = []
    barerepo = @project.barerepo
    unless barerepo.empty?
      headtree = barerepo.lookup barerepo.last_commit.tree_id
      # TODO: what if there are trees inside this tree?
      headtree.each do |blob|
        link = File.join @project.urlbase, 'master', blob[:name]
        @images.push({
          link: link,
          name: blob[:name],
          url: @project.imageurl(blob[:name])
        })
      end
    end

    @comments = Comment.where(
      polycomment_type: 'project',
      polycomment_id: @project.id
    )
    @comments = pg @comments, 10
    @comment = Comment.new
    @ajax = params[:page].nil? || params[:page] == 1
  end


  # GET /username/project/network
  def network
    @root = @project.root
  end

  # TODO: rename this as log, reflect everywhere
  # TODO: take different logging params, such as:
  #       oneline (only the commit messages/author)
  #       status (files added/removed in each commit)
  #       full (list all files in that commit as they list)

  # GET /commits/branch
  def commits
    branch = params[:branch] || 'master'
    if @project.barerepo.empty?
      flash[:notice] = 'This project has no commits.'
    else
      @commits = Rugged::Walker.new @project.barerepo
      @commits.push @project.barerepo.branches[branch].target
    end
  end

  # GET /commit/commit_id
  def commit
    @images = []
    commit = @project.commit params[:commit_id]
    redirect_to(user_project_path(@project.user, @project)) unless commit
    barerepo = @project.barerepo
    barerepo.diff(commit.parents.first, commit).deltas.each do |delta|
      link = File.join @project.urlbase, 'master', delta.new_file[:path]
      data = barerepo.read(delta.new_file[:oid]).data
      @images.push({
        link: link,
        data: data,
        name: delta.new_file[:path]
      })
    end
    @comments = Comment.where(
      polycomment_type: 'commit',
      polycomment_id: commit.oid
    )
    @comment = Comment.new
    @id = commit.oid
    @tree = commit.tree_id
  end

  # GET /tree/tree_id
  def tree
    @images = []
    tree = @project.tree params[:tree_id]
    redirect_to(user_project_path(@project.user, @project)) unless tree
    barerepo = @project.barerepo
    tree.each do |blob|
      link = File.join @project.urlbase, 'master', blob[:name]
      data = barerepo.read(blob[:oid]).data
      @images.push({
        link: link,
        data: data,
        name: blob[:name]
      })
    end
    @comments = Comment.where(
      polycomment_type: 'commit',
      polycomment_id: tree.oid
    )
    @comment = Comment.new
    @id = tree.oid
    render 'commit'
  end

  # Given a filename, view the state of the file in master.
  # Since we aren't doing much branch hopping on the app itself, this
  # is useful for fetching the current state of a file in a project.

  # TODO: /tree/master/file_name and generalize for /tree/branch/file_name

  def masterbranch
    @imageurl = File.join @project.satellitedir, params[:image_name]
    @comments = Comment.where(
      polycomment_type: 'file',
      polycomment_id: params[:image_name]
    )
    @comments = @comments.paginate page: params[:page], per_page: 10
    @comments = pg @comments, 10
    @comment = Comment.new
    @ajax = params[:page].nil? || params[:page] == 1
  end

  def file_history
    @bloblist = []
    walker = Rugged::Walker.new @project.barerepo
    walker.push @project.barerepo.head.target
    walker.each do |commit|
      tree = @project.barerepo.lookup commit.tree_id
      tree.each do |blob|
        next unless  blob[:name] == params[:image_name]

        blobdata = @project.barerepo.read(blob[:oid]).data
        image = {
                  name: blob[:name],
                  data: blobdata
                }
        @bloblist << [image , commit]
      end
    end
  end

  def newfile
  end

  def update
  end

  # TODO: allow uploads/updates of only supported images.

  def file_upload
    if params[:file]
      if images_commit @project, params[:file]
        sentence = view_context.pluralize(params[:file].size, 'image')
        flash[:notice] = "Successfully added #{sentence}! How sparkly!"
      else
        flash[:alert] = "An error prevented your #{sentence} from being saved"
      end
    else
      flash[:alert] = 'No image selected!'
    end
    redirect_to @project.urlbase
  end

  def file_update
    if params[:file]
      imagefile = params[:file]
      message = params[:message]
      commit_id = satellite_commit @project.satelliterepo,
                                   imagefile,
                                   message
      generate_thumbnail @project, params[:image_name], commit_id
      @project.pushtobare
      flash[:notice] = "#{params[:image_name]} has been updated! Shiny!"
    else
      flash[:alert] = "Unable to update #{params[:image_name]}. " \
                      'The server ponies are sad.'
    end
    redirect_to @project.urlbase
  end

  def file_delete
    file = File.join @project.satellitedir, params[:image_name]
    FileUtils.rm file if File.exists? file
    satellite_delete @project.satelliterepo, params[:image_name]
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
    child = @project.create_fork_project
    child.user = current_user
    if child.save
      redirect_to child.urlbase
      # TODO: notifications
    else
      flash[:alert] = "Couldn't fork project. " \
                      "#{child.errors.full_messages.to_sentence}"
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
    @user = User.find_by username: params[:user_id]
    render_404 && return if @user.blank?
    @project = Project.with_deleted.find_by user_id: @user.id,
                                            name: params[:id]
    render_404 && return if @project.blank?
    return unless @project.deleted?
    flash[:alert] = 'The project you requested had been deleted.'
    redirect_to user_path(@user)
  end
end
