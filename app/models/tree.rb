class Tree

  attr_accessor :project, :rugged_tree, :oid, :path

  def initialize(project, oid = nil, path = nil)
    @rugged_tree = project.branch_tree oid, path
    @project = project
    @oid = oid
    @path = path
  end

  # Returns an array containing 3 elements, the first is readme if it exists
  # second is an array of blobs in the tree and the third is an array of the
  # subtrees in the tree.
  def traverse
    return [nil, [], []] if project.barerepo.empty?
    images = []
    directories = []
    readme = nil
    dump_show_img
    rugged_tree.each do |item|
      next if item[:name][0] == '.'
      dest = path.nil? ? item[:name] : File.join(path, item[:name])
      if item[:type] == :blob
        readme = get_readme(item[:oid]) if item[:name] =~ /^readme/i
        resize_image(project.barerepo.read(item[:oid]).data, dest)
        images << { dest: dest, name: item[:name] }
      else
        directories << { dest: dest, name: item[:name] }
      end
    end
    [readme, images, directories]
  end


  private

  # resize images for project show page
  # uses same size as that of images on inspire page
  def resize_image(image_string, dest)
    image = Gg::ImageProcessing.new(image_string)
    i_name = dest.split('/').last
    image.blob_generate(project.image_for(i_name, 'show'))
    image.blob_generate(project.image_for(i_name, 'show_image_desk'), 'desktop')
    image.blob_generate(project.image_for(i_name, 'show_image_mob'), 'mobile')
  end

  # Dumbs show-image folder content before walk
  def dump_show_img
    FileUtils.rm_rf(Dir.glob("#{project.image_for('', 'show_image_desk')}/*"))
    FileUtils.rm_rf(Dir.glob("#{project.image_for('', 'show_image_mob')}/*"))
    FileUtils.rm_rf(Dir.glob("#{project.image_for('', 'show')}/*"))
  end

  def get_readme(readme_oid)
    project.barerepo.read(readme_oid).data
  end
end
