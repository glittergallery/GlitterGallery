class CreateProjectFollowers < ActiveRecord::Migration
  def change
    create_table :project_followers do |t|
      t.references :follower
      t.references :following
      t.timestamps
    end
  end
end
