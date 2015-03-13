module ProjectsHelper

  def private_check
    @user = User.find_by username: params[:username]
    @project = Project.find_by user_id: @user.id, name: params[:project]
    if user_signed_in?
      unless @project.private and ((params[:xid]!=@project.uniqueurl and current_user.id!=@project.user_id))
        true
      else false
      end
    else
      unless @project.private and (params[:xid]!=@project.uniqueurl)
        true
      else false
      end
    end
  end

  def owner_check
    @user = User.find_by username: params[:username]
    @project = Project.find_by user_id: @user.id, name: params[:project]
    if user_signed_in? and @project.user_id == current_user.id
      true
    else false
    end
  end

  def nested_projects roots,project
    content_tag :ul, :class => "nested_projects" do
      roots.each do |root|
        user_link = link_to(root.user.username,"/#{root.user.username}")
        project_link = link_to(root.name,root.urlbase)
        str = "#{user_link} / #{project_link}".html_safe
        if root.id == project.id
          concat(content_tag(:li, str, class: "current_node"))
        elsif root.deleted?
          concat(content_tag(:li, "#{user_link} / #{content_tag(:span,"#{root.name}",class: "deleted_node")}".html_safe))
        else
          concat(content_tag(:li, str))
        end
        concat(nested_projects(root.children,project)) if root.has_children?
      end
    end
  end
end
