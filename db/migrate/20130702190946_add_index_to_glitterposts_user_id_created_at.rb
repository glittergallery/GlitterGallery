class AddIndexToGlitterpostsUserIdCreatedAt < ActiveRecord::Migration
  def change
  	add_index :glitterposts, [:user_id, :created_at]
  end
end
