class ChangePolycommentIdType < ActiveRecord::Migration
  def change
    change_column :comments, :polycomment_id, :string
  end
end
