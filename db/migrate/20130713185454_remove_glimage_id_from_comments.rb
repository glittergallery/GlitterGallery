class RemoveGlimageIdFromComments < ActiveRecord::Migration
  def up
    remove_column :comments, :glimage_id
  end

  def down
    add_column :comments, :glimage_id, :integer
  end
end
