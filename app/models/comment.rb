class Comment < ActiveRecord::Base
  belongs_to :polycomment, :polymorphic => true
  
  attr_accessible :body, :private

  validates :body, :presence => :true

end
