class Annotation < ActiveRecord::Base
  belongs_to :user
  validates :text, :json, :blob_id, presence: true
  validates :user_id, numericality: { only_integer: true }

  # Find all the annotations associated with given blob
  def self.find_by_blob(blob_id)
    annotations = Annotation.where(blob_id: blob_id)
    annotations.each do |annotation|
      annotation.make_presentable
    end
  end

  # Sets username and time for annotation
  # These values are used while drawing each annotation
  def make_presentable
    # parse the annotation json into a ruby object
    annotation_hash = JSON.parse(json) # json is an attribute of annotation
    annotation_hash[:username] = user.username.to_s
    annotation_hash[:updated_at] = updated_at.strftime('%B %d, %Y')
    annotation_hash[:id] = id
    # convert back to json
    self.json = annotation_hash.to_json
  end
end
