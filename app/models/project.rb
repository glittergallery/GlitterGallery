class Project < ActiveRecord::Base
  belongs_to :repo
  has_many :glimages
  accepts_nested_attributes_for :glimages

  attr_accessible :name, :images_attributes

  validates :name, :presence => true

end
