class Annotation < ActiveRecord::Base
  belongs_to :user
  validates :text, :json, :blob_id, presence: true
  validates :user_id, numericality: { only_integer: true }
end
