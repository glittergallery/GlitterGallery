class Glitterpost < ActiveRecord::Base
  attr_accessible :content, :title
  belongs_to :user

  validates :content, presence: true
  validates :title, presence: true
end
