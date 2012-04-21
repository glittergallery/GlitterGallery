class Project < ActiveRecord::Base
  has_many :images
  accepts_nested_attributes_for :images

  attr_accessible :name, :images_attributes

  validates :name, :presence => true
end
