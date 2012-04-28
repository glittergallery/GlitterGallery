class Comment < ActiveRecord::Base
  belongs_to :glimage
  
  attr_accessible :author, :email, :body

  validates :author, :presence => :true
  validates :body, :presence => :true

end
