class Comment < ActiveRecord::Base
  
  belongs_to :user
  validates :body, :presence => :true

  default_scope order: 'comments.created_at DESC'

  
end
