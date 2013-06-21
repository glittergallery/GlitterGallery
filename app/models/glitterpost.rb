class Glitterpost < ActiveRecord::Base
  attr_accessible :content, :title
  has_many :comments, :as => :polycomment
  belongs_to :user
end
