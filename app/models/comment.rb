class Comment < ActiveRecord::Base
  
  attr_accessible :body, :issue
  validates :body, :presence => :true
  #validates :issue, :presence => :true

end
