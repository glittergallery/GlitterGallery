class Comment < ActiveRecord::Base
  
  belongs_to :user
  attr_accessible :body, :issue
  validates :body, :presence => :true

  default_scope order: 'comments.created_at DESC'
  #validates :issue, :presence => :true
  
end
