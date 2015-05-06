class CreateNotifications < ActiveRecord::Migration
  def change
    create_table :notifications do |t|
      t.references :actor
      t.integer :action
      t.integer :object_type
      t.integer :object_id
      t.timestamps
    end
  end
end
