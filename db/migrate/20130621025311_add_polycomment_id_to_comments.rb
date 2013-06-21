class AddPolycommentIdToComments < ActiveRecord::Migration
  def change
    add_column :comments, :polycomment_id, :integer
  end
end
