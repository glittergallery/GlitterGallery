class RenameProjectFollowersAndAddIndex < ActiveRecord::Migration
  def up
    rename_table :project_followers, :relationships
    add_index :relationships, :follower_id
    add_index :relationships, :following_id
  end

  def down
    remove_index :relationships, :following_id
    remove_index :relationships, :follower_id
    rename_table :relationships, :project_followers
  end
end
