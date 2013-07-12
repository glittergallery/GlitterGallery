class AddPrivateToGlimages < ActiveRecord::Migration
  def change
    add_column :glimages, :private, :boolean
  end
end
