class RemoveOldIndexFromComments < ActiveRecord::Migration
  def up
  	remove_index :comments, :polycomment_id
  end

  def down
  	add_index :comments, :polycomment_id
  end
end
