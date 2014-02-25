class AddUserIdToGlitterposts < ActiveRecord::Migration
  def change
    add_column :glitterposts, :user_id, :integer
  end
end

