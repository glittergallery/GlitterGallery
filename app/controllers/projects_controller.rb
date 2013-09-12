require 'grit'
class ProjectsController < ApplicationController

  def new
    @project = Project.new
    @projects = current_user.projects
  end

  def create
    project = Project.new :name => params[:project][:name]
    project.user_id = current_user.id

    if project.save
      redirect_to url_for(project)
    else
      flash[:alert] = "Didn't save project!"      
      redirect_to dashboard_path
    end
  end

  def file_upload  
    #FIXME - current process allows any kinda files to be uploaded.
    # restrict to only image formats.

    @project = Project.find params[:id]
    tmp = params[:file].tempfile
    file = File.join @project.path, params[:file].original_filename
    FileUtils.cp tmp.path, file
    if params[:file]
      image_commit @project, params[:file]
      flash[:notice] = "Your new image was added successfully! How sparkly!"
    else
      flash[:alert]  = "Your new image didn't get saved! How sad :("
    end
    redirect_to url_for(@project)
  end

  def file_update
    #FIXME - current process allows any kinda files to be uploaded.
    # restrict to only image formats.
    
    @project = Project.find params[:id]
    tmp = params[:file].tempfile
    file = File.join @project.path, params[:image_name]
    FileUtils.cp tmp.path, file
    if params[:file]
        imagefile = params[:file]
        message = "Updated #{params[:image_name]}"
        commit @project.path, params[:image_name], imagefile.read, message
        flash[:notice] = "#{params[:image_name]} has been updated! Shiny!"
    else
      flash[:alert] = "Unable to update #{params[:image_name]}. The server ponies are sad."
    end
    redirect_to url_for(@project)
  end


  def invite
    @project = Project.find params[:id]
    mime_type = Mime::Type.lookup_by_extension('xml')
    content_type = mime_type.to_s unless mime_type.nil?
    @git_dir = "/#{@project.user.email}/#{@project.name}"
    render :layout => false, :content_type => content_type
  end

  def show
    if Rails.env.production?
      @invite_uri = "sparkleshare://#{ENV['OPENSHIFT_APP_DNS'].downcase}/projects/#{params[:id]}/invite.xml" # If it's in production.
    else
      @invite_uri = "#{Rails.root}/uploads/#{Rails.env}/projects/#{params[:id]}/invite.xml" # If not in production.
    end

    @project = Project.find params[:id]
    @images = Dir.glob(File.join @project.path, '*')
    @comments = []
    @comments = Comment.where(polycomment_type: "project", polycomment_id: @project.id)
  end

  def commits
    @project = Project.find params[:id]
    repo = Grit::Repo.init_bare_or_open(File.join (@project.path) , '.git')
    @commits = repo.commits
  end

  def projectcommit
    @project = Project.find params[:id]
    repo = Grit::Repo.init_bare_or_open(File.join (@project.path) , '.git')
    @tree = repo.tree(params[:tree_id])
    @contents = @tree.contents
  end

  def fork
    @project = Project.find params[:id]
    @forked_project = Project.new :name => @project.name
    @forked_project.user_id = current_user.id

    if @forked_project.save
      @forked_project_saved = true
      if @forked_project_saved

        repo = Grit::Repo.init_bare_or_open(File.join (@forked_project.path), '.git')
        repo.git.clone({} , File.join(@forked_project.path, 'test'), @project.path)
        redirect_to url_for(@forked_project)

      else
        redirect_to dashboard_path
      end
    else
      flash[:alert] = "Didn't save project!"
      redirect_to dashboard_path
    end
  end

  def forkyou

    @project = Project.find params[:id]
    @forked_project = Project.new :name => @project.name
    @forked_project.user_id = current_user.id
    @forked_project = @project.clone

    if @forked_project.save
      @forked_project_saved = true
      if @forked_project_saved

        FileUtils.rm_r(@forked_project.path)
        FileUtils.cp_r(@project.path,@forked_project.path)

        redirect_to url_for(@forked_project)

      else
        redirect_to dashboard_path
      end
    else
      flash[:alert] = "Didn't save project!"
      redirect_to dashboard_path
    end
  end

  def masterbranch
    @project = Project.find params[:id]
    @imageurl = File.join @project.path, params[:image_name]
  end

  def file_history
    @bloblist = Array.new
    @project = Project.find params[:id]
    repo = Grit::Repo.init_bare_or_open (File.join (@project.path) , '.git')
    repo.commits.each do |commit|
      commit.tree.contents.each do |blob|
        if blob.name == params[:image_name]
          @bloblist << [blob, commit]
        end
      end
    end
  end

end
