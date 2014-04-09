class ChangeImagesToGlimages < ActiveRecord::Migration
  def change
    rename_table :images, :glimages
  end
end
