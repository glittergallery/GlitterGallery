class Comment < ActiveRecord::Base
  
  belongs_to :user
  attr_accessible :body, :issue
  validates :body, :presence => :true
  #validates :issue, :presence => :true
  
end
