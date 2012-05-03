class Project < ActiveRecord::Base
  belongs_to :repo
  has_many :glimages
  accepts_nested_attributes_for :glimages

  attr_accessible :name, :images_attributes

  validates :name, :presence => true

  # get the last update time
  # of the images in the project
  def last_updated
    g = Glimage.find_by_project_id(id, :order => 'updated_at DESC')
    g.updated_at
  end

end
