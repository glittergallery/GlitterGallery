class Comment < ActiveRecord::Base
  
  attr_accessible :body, :issue
  validates :body, :presence => :true

  default_scope order: 'comments.created_at DESC'
  #validates :issue, :presence => :true

end
