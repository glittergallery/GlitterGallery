module ProjectsHelper
  def private_check
    @user = User.find_by username: params[:user_id]
    @project = Project.find_by(
      user_id: @user.id,
      name: (params[:project_id] || params[:id])
    )
    if user_signed_in?
      if @project.private && ((params[:xid] != @project.uniqueurl &&
         current_user.id != @project.user_id))
        false
      else
        true
      end
    else
      if @project.private && (params[:xid] != @project.uniqueurl)
        false
      else
        true
      end
    end
  end

  def owner_check
    @user = User.find_by username: params[:user_id]
    @project = Project.find_by user_id: @user.id, name: params[:id]
    user_signed_in? && @project.user_id == current_user.id
  end

  def nested_projects(roots, project)
    content_tag :ul, class: 'nested_projects' do
      roots.each do |root|
        user_link = link_to(root.user.username, "/#{root.user.username}")
        project_link = link_to(root.name, root.urlbase)
        str = "#{user_link} / #{project_link}".html_safe
        if root.id == project.id
          concat(content_tag(:li, str, class: 'current_node'))
        elsif root.deleted?
          deleted_text = content_tag(:span, "#{root.name}",
                                     class: 'deleted_node'
          )
          concat(content_tag(:li, "#{user_link} / #{deleted_text}".html_safe))
        else
          concat(content_tag(:li, str))
        end
        concat(nested_projects(root.children, project)) if root.has_children?
      end
    end
  end

  def breadcrumb
    res = link_to(@project.name,
                  project_tree_path(@project, params[:oid], ''))
    dest = ''
    arr = params[:destination].split('/')
    arr.each_with_index do |dir, i|
      if i == 0
        dest = dir
      else
        dest = File.join(dest, dir)
      end
      res += ' / '
      if i == arr.size - 1
        res += dir
      else
        res += link_to(dir,
                       project_tree_path(@project, params[:oid], dest))
      end
    end
    res
  end

  # return array of possible sorting options
  def sort_type
    ['newest', 'stars', 'followers', 'forks', 'activity', 'last updated']
  end

  # used to render default or first image of repo
  def render_image(project)
    tree = project.branch_tree 'master'
    if tree.nil?
      image_tag nil, class: 'img-placeholder', data: {
        mobile_url: '/usercover_mobile.jpg',
        desktop_url: '/usercover_desktop.jpg'
      }
    else
      images = project.find_inspire_image
      mobile = project.image_for images, 'mobile_inspire', false
      desktop = project.image_for images, 'desktop_inspire', false
      image_tag nil, class: 'img-placeholder', data: {
        mobile_url: mobile,
        desktop_url: desktop
      }
    end
  end
end
