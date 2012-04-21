class Image < ActiveRecord::Base
  belongs_to :project

  attr_accessible :file

  validates :file, :presence => true
  
end
