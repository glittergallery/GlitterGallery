require 'grit'
class ProjectsController < ApplicationController

  def new
    @project = Project.new
    @project.glimages.build
    @projects = current_user.projects
    @glimages = current_user.glimages
  end

  def create
    project = Project.new :name => params[:project][:name]
    project.user_id = current_user.id
    project.glimages.new :file => params[:project][:glimage][:file].original_filename,
                         :filetype => params[:project][:glimage][:file].content_type,
                         :private => params[:project][:glimage][:private]
    if project.save
      #add_the_magic project # add magicmockup.js if needed
      project_saved = true
      #write imagefile
      begin
        #write file and commit to repo
        imagefile = params[:project][:glimage][:file]
        image_commit project, imagefile
        create_thumbnail project.glimages.first
      rescue SystemCallalert
        flash[:alert] = "Unable to write image file to repo"
        project.glimages.delete
      end
      if project_saved
        redirect_to url_for(project)
      else
        redirect_to dashboard_path
      end
    else
      @project = params[:project]
      flash[:alert] = "Didn't save project!"
      redirect_to dashboard_path
    end
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
    @glimage = Glimage.new
    @glimage.project_id = params[:id]
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

end
