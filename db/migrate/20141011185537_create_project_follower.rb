class CreateProjectFollower < ActiveRecord::Migration
  def up
    create_table :project_followers do |t|
      t.integer :project_id
      t.integer :follower_id
    t.timestamps
    end
  end

  def down
    drop_table :project_followers
  end
end
