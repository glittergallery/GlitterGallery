class Comment < ActiveRecord::Base
  belongs_to :polycomment, :polymorphic => true
  
  attr_accessible :body, :issue
  validates :body, :presence => :true
  #validates :issue, :presence => :true

end
