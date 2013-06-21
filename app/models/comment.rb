class Comment < ActiveRecord::Base
  belongs_to :polycomment, :polymorphic => true
  
  attr_accessible :author, :email, :body

  validates :author, :presence => :true
  validates :body, :presence => :true

end
