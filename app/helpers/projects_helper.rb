module ProjectsHelper

  # set the network graph, starting at root of the tree.
  # also includes deleted projects in the graph
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
        r_children = root.children.with_deleted
        concat(nested_projects(r_children, project)) unless r_children.empty?
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

  # return array of possible diff options
  def compare_options
    %w(side toggle opacity mask)
  end

  # used to render default or first image of repo
  def render_inspire_image(project)
    tree = project.branch_tree 'master'
    if tree.nil?
      image_tag nil, class: 'img-placeholder', data: {
        mobile_url: '/usercover_mobile.jpg',
        desktop_url: '/usercover_desktop.jpg'
      }
    else
      images = project.find_inspire_image
      mobile = project.image_for images, 'mobile_inspire'
      desktop = project.image_for images, 'desktop_inspire'
      image_tag nil, class: 'img-placeholder', data: {
        mobile_url: mobile,
        desktop_url: desktop
      }
    end
  end

  # render responsive images for project show page
  # uses jquery for setting src from data attribute
  def render_show_image(project, image_name)
    mobile = project.image_for image_name, 'show_image_mob'
    desktop = project.image_for image_name, 'show_image_desk'
    image_tag nil, class: 'img-placeholder', data: {
      mobile_url: mobile,
      desktop_url: desktop
    }
  end

  # As of now we support only three file types.
  # Following function finds all files (not dir) and finds
  # their type using extenstion
  def find_file_types(project)
    formats = { '.svg' => 0, '.jpg' =>  0, '.png' => 0, 'other' => 0 }
    path = File.join project.satellitedir, '/**/*'
    files = Dir[path]
    files.each do |f|
      next unless File.file?(f)
      ext = File.extname(f)
      if !formats[ext].nil?
        formats[ext] += 1
      else
        formats['other'] += 1
      end
    end
    formats.sort_by {|_k, v| v}.reverse
  end

  # returns number of commits on basis of repo's head
  def commit_count(project, head)
    return 0 if project.barerepo.empty?
    commits = Rugged::Walker.new project.barerepo
    commits.push project.branch_commit head
    commits.count
  end
end
