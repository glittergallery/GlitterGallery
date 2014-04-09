class AddPolycommentTypeToComments < ActiveRecord::Migration
  def change
    add_column :comments, :polycomment_type, :string
  end
end
