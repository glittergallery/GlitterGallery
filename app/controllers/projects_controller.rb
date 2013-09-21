require 'grit'

# User interacts with projects through the methods defined 
# in this controller. 
# User may create multiple unique projects, and they in 
# turn contain multiple files. We expect these files to be 
# image format files, but right now there is no provision to verify that.

class ProjectsController < ApplicationController

  # New projects can be named in the projects#new page.
  # The list of current projects is required so we can display
  # them as a carousel in the projects#new page. 

  def new
    @project = Project.new
    @projects = current_user.projects
  end

  # Project creation is defined in the method below. We're allowing 
  # them to name a project, and we're then adding them to the project list
  # of the person who's currently logged in.


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

  # Projects with thumbnails of their files can be viewed on projects/:id
  # We're currently not displaying thumbnails though, we're fetching the 
  # images off the current working tree of the repo where they're stored.
  # FIXME - instead of showing the images themselves, it would be nice to 
  #         be able to view thumbnails instead. 

  def show
    if Rails.env.production?
      @invite_uri = "sparkleshare://#{ENV['OPENSHIFT_APP_DNS'].downcase}/projects/#{params[:id]}/invite.xml" # If it's in production.
    else
      @invite_uri = "#{Rails.root}/uploads/#{Rails.env}/projects/#{params[:id]}/invite.xml" # If not in production.
    end

    @project = Project.find params[:id]
    @images = Dir.glob(File.join @project.path, '*')
    @comments = Comment.where(polycomment_type: "project", polycomment_id: @project.id)
  end

  # Displays the git commits for a given project. We're making use of
  # inbuilt functions available from the grit gem. 

  def commits
    @project = Project.find params[:id]
    repo = Grit::Repo.init_bare_or_open(File.join (@project.path) , '.git')
    @commits = repo.commits
  end

  # View the state of a project for any given commit. Every commit has 
  # a list of comments associated with it. 

  def projectcommit
    @project = Project.find params[:id]
    repo = Grit::Repo.init_bare_or_open(File.join (@project.path) , '.git')
    @tree = repo.tree(params[:tree_id])
    @contents = @tree.contents
    @comments = Comment.where(polycomment_type: "commit", polycomment_id: params[:tree_id])
  end

  # Given a filename, view the state of the file in master.
  # Since we aren't doing much branch hopping on the app itself, this
  # is useful for fetching the current state of a file in a project.

  def masterbranch
    @project = Project.find params[:id]
    @imageurl = File.join @project.path, params[:image_name]
    @comments = Comment.where(polycomment_type: "file", polycomment_id: params[:image_name])
  end

  # Given a filename, view it's entire commit history, including author
  # information, etc. Only one file's history may be viewed at a time, so
  # please not that this is different from the project's commit history.

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

  # Sparkleshare integration.

  def invite
    @project = Project.find params[:id]
    mime_type = Mime::Type.lookup_by_extension('xml')
    content_type = mime_type.to_s unless mime_type.nil?
    @git_dir = "/#{@project.user.email}/#{@project.name}"
    render :layout => false, :content_type => content_type
  end

  # Let's users upload new files to the project. The new files are
  # also commited to the backend git repository. They're added to the non_bare 
  # repo, and pushed to the bare_repo.
  # FIXME - work on the push from non_bare to bare repo method.
  # FIXME - allow uploads of only supported images.

  def file_upload 
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

  # Update files using this function. Updated files get commited to the non_bare repo
  # and then pushed to the bare repo.
  # FIXME - work on the push from non_bare to bare repo method.
  # FIXME - allow uploads of only supported images.

  def file_update  
    @project = Project.find params[:id]
    tmp = params[:file].tempfile
    file = File.join @project.path, params[:image_name]
    FileUtils.cp tmp.path, file
    if params[:file]
        imagefile = params[:file]
        message = "updated #{params[:image_name]}"
        commit @project.path, params[:image_name], imagefile.read, message
        flash[:notice] = "#{params[:image_name]} has been updated! Shiny!"
    else
      flash[:alert] = "Unable to update #{params[:image_name]}. The server ponies are sad."
    end
    redirect_to url_for(@project)
  end

  # WIP - Supposed to help in forking a repo that belongs to another user.
  # Fork works but creates only bare repos.

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

  # This function will be removed soon, just being used to test fork.

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

  # Renders the SVG-edit form. Helps you specify a filename for the SVG,
  # and 

  def new_svg
    @project = Project.find params[:id]
  end

  # Saves a new SVG file generated through SVG-edit. The image data is passed through to params, 
  # we might want to change that at a later stage, though, lest the file is too big.
  # FIXME - We're using a base64 encoded version of the original SVG data. 
  #         We should look at converting it back to native XML mark so the browser
  #         can auto-render it.

  def create_svg
    @project = Project.find params[:id]
    filename = params[:filename] + '.svg'
    file = File.open(File.join(@project.path, filename), 'w+') {|f| f.write(params[:sketch]) }
    if file
      commit @project.path, filename, Base64.decode64(params[:sketch]), "created #{filename}"
      flash[:notice] = "Your new image was added successfully! How sparkly!"
    else
      flash[:alert]  = "Your new image didn't get saved! How sad :("
    end
    redirect_to url_for(@project)
  end

  # WIP - lets you edit svg images created on SVG-edit, or manually uploaded ones too.

  def edit_svg
    @project = Project.find params[:id]
    filename = params[:image_name]
    file = File.open( File.join(@project.path, filename), 'rb')
    @filedata = Base64.encode64(file.read)
    file.close

  end

end
