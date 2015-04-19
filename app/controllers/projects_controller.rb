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
      redirect_to user_project_path @project.user, @project
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
      redirect_to user_project_path project.user, project
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
    redirect_to user_project_path @project.user, @project
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
    redirect_to user_project_path @project.user, @project
  end

  # GET /user/project/blob/branch_or_commit_oid/destination
  def blob
    oid = @project.branch_commit(params[:oid]).oid
    @dest = params[:destination]
    blob = @project.blob oid, @dest
    @image = { data: blob.text, name: @dest }
    @comments = Comment.where(
      polycomment_type: 'blob',
      polycomment_id: blob.oid
    )
    @comments = pg @comments, 10
    @comment = Comment.new
    @id = blob.oid
    @ajax = params[:page].nil? || params[:page] == 1
  end

  # GET /user/project/branches
  def branches
    @branches = @project.barerepo.branches
  end

  def show
    @oid = 'master'
    barerepo = @project.barerepo
    @branches = barerepo.branches
    @images, @directories = @project.browse_tree
    @comments = Comment.where(
      polycomment_type: 'project',
      polycomment_id: @project.id
    )
    @comments = pg @comments, 10
    @comment = Comment.new
    @comment_type = 'project'
    @id = @project.id.to_s
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

  # GET /commits/branch_or_SHA
  def commits
    if @project.barerepo.empty?
      flash[:notice] = 'This project has no commits.'
    else
      @commits = Rugged::Walker.new @project.barerepo
      @commits.push @project.branch_commit params[:oid]
    end
  end

  # GET /commit/commit_id
  def commit
    @images = []
    @oid = params[:commit_id]
    commit = @project.commit params[:commit_id]
    redirect_to(user_project_path(@project.user, @project)) unless commit
    barerepo = @project.barerepo
    barerepo.diff(commit.parents.first, commit).deltas.each do |delta|
      @images.push({
        data: barerepo.read(delta.new_file[:oid]).data,
        name: delta.new_file[:path] })
    end
    @comments = Comment.where(
      polycomment_type: 'commit',
      polycomment_id: commit.oid
    )
    @comments = pg @comments, 10
    @comment = Comment.new
    @id = commit.oid
  end

  # POST /user/project/create_branch
  # TODO: to be visited after adding cancancan.
  def create_branch
    if params[:branch_name].empty?
      flash[:alert] = 'No name provided for the branch!'
      redirect_to project_branches_path @project
    else
      @branch = @project.create_branch params[:branch_name]
      if @branch
        flash[:notice] = "Successfully created #{params[:branch_name]}!"
        redirect_to project_tree_path @project, @branch.name
      else
        flash[:alert] = 'Something went wrong, the branch was not created!'
        redirect_to project_branches_path @project
      end
    end
  end

  # GET /tree/tree_id
  def tree
    @oid = params[:oid] || 'master'
    @dest = params[:destination]
    tree = @project.branch_tree @oid, @dest
    redirect_to(user_project_path(
      @project.user, @project, @project.uniqueurl
    )) unless tree
    @images, @directories = @project.browse_tree tree, params[:destination]
    @comments = Comment.where(
      polycomment_type: 'tree',
      polycomment_id: tree.oid
    )
    @comment_type = 'tree'
    @comments = pg @comments, 10
    @comment = Comment.new
    @id = tree.oid
    render 'show'
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

  def create_directory
    if params[:directory].empty?
      flash[:alert] = 'No name provided for the directory!'
      redirect_to :back
    else
      branch = params[:branch] || 'master'
      new_dest = @project.create_directory(
        branch,
        params[:destination],
        params[:directory],
        @user.git_author_params
      )
      if user_signed_in? && new_dest
        flash[:notice] = "Successfully added #{params[:dir_name]}!"
        redirect_to project_tree_path(@project, branch, new_dest)
      else
        flash[:alert] = 'An error prevented your directory from being created'
        redirect_to :back
      end
    end
  end

  def newfile
    @cur = params[:oid] || 'master'
    @cur = 'master' unless @project.branch? @cur
    @all = @project.barerepo.branches
  end

  def update
  end

  # TODO: allow uploads/updates of only supported images.

  def file_upload
    branch = params[:branch] || 'master'
    if params[:file]
      if user_signed_in? && @project.add_images(
        branch,
        params[:destination],
        params[:file],
        @user.git_author_params
      )
        sentence = view_context.pluralize(params[:file].size, 'image')
        flash[:notice] = "Successfully added #{sentence}! How sparkly!"
        redirect_to project_tree_path(@project, branch)
      else
        flash[:alert] = "An error prevented your #{sentence} from being saved"
        redirect_to :back
      end
    else
      flash[:alert] = 'No image selected!'
      redirect_to :back
    end
  end

  def file_update
    if @project.update_image(
      params[:branch],
      params[:destination],
      params[:file],
      @user.git_author_params,
      params[:message]
    )
      flash[:notice] = "#{params[:image_path]} has been updated! Shiny!"
    else
      flash[:alert] = "Unable to update #{params[:image_path]}. " \
                      'The server ponies are sad.'
    end
    redirect_to project_blob_path(
      @project,
      params[:branch],
      params[:destination]
    )
  end

  def file_delete
    file = File.join @project.satellitedir, params[:image_name]
    FileUtils.rm file if File.exists? file
    satellite_delete @project.satelliterepo, params[:image_name]
    @project.pushtobare
    flash[:notice] = "#{params[:image_name]} has been deleted!"
    redirect_to user_project_path @project.user, @project
  end

  def open
    @pull = PullRequest.find params[:pull_id]
    @pull.status = 'open'
    @pull.save
    redirect_to user_project_path @project.user, @project
  end

  def close
    @pull = PullRequest.find params[:pull_id]
    @pull.status = 'closed'
    @pull.save
    redirect_to user_project_path @project.user, @project
  end

  def fork
    child = @project.create_fork_project
    child.user = current_user
    if child.save
      redirect_to user_project_path child.user, child
      # TODO: notifications
    else
      flash[:alert] = "Couldn't fork project. " \
                      "#{child.errors.full_messages.to_sentence}"
      redirect_to user_project_path @project.user, @project
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
