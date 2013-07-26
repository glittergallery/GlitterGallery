class AddIndexToGlimagesFile < ActiveRecord::Migration
  def change
  	add_index :glimages, :file, unique: true
  end
end
