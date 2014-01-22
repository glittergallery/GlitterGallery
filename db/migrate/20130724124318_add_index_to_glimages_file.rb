class AddIndexToGlimagesFile < ActiveRecord::Migration
  def change
  	add_index :glimages, [:file, :project_id], :unique=>true
  end
end
