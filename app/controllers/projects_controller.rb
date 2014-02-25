require 'grit'

# User interacts with projects through the methods defined 
# in this controller. 
# User may create multiple unique projects, and they in 
# turn contain multiple files. We expect these files to be 
# image format files, but right now there is no provision to verify that.

class ProjectsController < ApplicationController
  before_filter :authenticate_user!

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
      project.parent = project.id
      project.save
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
  # please note that this is different from the project's commit history.

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

  # Let's users upload a new file to the project through a 
  # different page. Original functionality used to exist in the
  # project show page, moved to a separate page now.

  def newfile
    @project = Project.find params[:id]
  end

  def update
    @project = Project.find params[:id]
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
        message = params[:message]
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
    @forked_project = Project.new :name => @project.name, 
                                  :parent => @project.id
    @forked_project.user_id = current_user.id

    if @forked_project.save
      @forked_project_saved = true
      if @forked_project_saved

        git = Grit::Git.new @forked_project.path
        #repo.git.clone({} , File.join(@forked_project.path, 'test'), @project.path)
        git.native(clone,{}, File.join(@project.path, '.git'),@forked_project.path)

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
    # what if X is trying to fork a project that was forked by Y from X? 
    @forked_project = Project.new :name => @project.name,
                                  :parent => @project.id
    @forked_project.user_id = current_user.id
    #@forked_project = @project.clone

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

  #def pull_request
  # this one will make an entry into the pull request table
  # ID, project info, desc, upto_commitID, status <merge, close, open>
  # when a new request is opened, it will issue it as open
  # upon merge, it will make it as merge and make them nonclickable again
  # upon close, it will make it as closed but it may be re-opemed and merged
  #end

  #Pull request - WIP

  def pull_request
    @forked_project = Project.find params[:id]
    @parent_project = Project.find @forked_project.parent
    @parent_repo = Grit::Repo.init_bare_or_open(File.join (@parent_project.path) , '.git')
    @forked_repo = Grit::Repo.init_bare_or_open(File.join (@forked_project.path) , '.git')

    @fork_commits = []
    @forked_repo.commits.each do |c|
      @fork_commits << c.id
    end

    if @parent_repo.commits.first == @forked_repo.commits.first
      redirect_to url_for @forked_project
      flash[:notice] = "Nothing to pull, the parent project is up to date! :)"
    end

    unless @parent_repo.commits.first != nil and @fork_commits.include? @parent_repo.commits.first.id
      redirect_to url_for @forked_project
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
        redirect_to File.join(url_for(@parent_project), 'pulls')
      else
        flash[:error] = "Damn, something went wrong. Please try again!"
        redirect_to dashboard_path
      end
    end
  end

  # Renders pull requests page for specific projects
  def pulls
    @project = Project.find params[:id]
    #spit a list of all pulls from the table which have @project.id as parent
    @pulls = PullRequest.where("parent=?",@project.id)
  end

  # Shows details about a specific pull request on a project
  def pull
    @project = Project.find params[:id]
    @pull = PullRequest.find params[:pull_id]
    @comments = Comment.where(polycomment_type: "pull", polycomment_id: @pull.id)
  end

  # allow merging a pull request
  def merge
    @project = Project.find params[:id]
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
    redirect_to url_for @project
  end

  # Helps to re-open requests that have been closed
  def open
    @project = Project.find params[:id]
    @pull = PullRequest.find params[:pull_id]
    @pull.status = 'open'
    @pull.save
    redirect_to url_for @project
  end

  # Helps to close requests that shouldn't be open
  def close
    @project = Project.find params[:id]
    @pull = PullRequest.find params[:pull_id]
    @pull.status = 'closed'
    @pull.save
    redirect_to url_for @project
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
    filename = params[:filename].squish.downcase.tr(" ","_") + '.svg'
    file = File.open(File.join(@project.path, filename), 'w+') {|f| f.write(params[:sketch]) }
    if file
      commit @project.path, filename, Base64.decode64(params[:sketch]), "Create #{filename}"
      flash[:notice] = "Your new image was added successfully! How sparkly!"
    else
      flash[:alert]  = "Your new image didn't get saved! How sad :("
    end
    redirect_to url_for(@project)
  end

  # WIP - lets you edit svg images created on SVG-edit, or manually uploaded ones too.

  def edit_svg
    project = Project.find params[:id]
    @filename = params[:image_name]
    @path= (File.join project.path, @filename).gsub("public","")
  end

  def update_svg
    @project = Project.find params[:id]
    filename = params[:filename]
    file = File.open(File.join(@project.path, filename), 'w+') {|f| f.write(params[:sketch]) }

    if file
        message = params[:message]
        commit @project.path, filename, Base64.decode64(params[:sketch]), message
        flash[:notice] = "#{filename} has been updated! Shiny!"
    else
      flash[:alert] = "Unable to update #{filename}. The server ponies are sad."
    end
    redirect_to url_for(@project)

  end
end
