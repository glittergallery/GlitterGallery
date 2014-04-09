class AddPolycommentIndexToComments < ActiveRecord::Migration
  def change
  	add_index :comments, [:polycomment_type, :polycomment_id]
  end
end
