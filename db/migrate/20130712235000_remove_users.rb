class RemoveUsers < ActiveRecord::Migration
  def up
    drop_table :users
  end

  def down
    create_table :users
  end
end
