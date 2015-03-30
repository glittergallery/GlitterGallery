module ProjectsHelper
  def private_check
    @user = User.find_by username: params[:user_id]
    @project = Project.find_by user_id: @user.id, name: params[:id]
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
end
