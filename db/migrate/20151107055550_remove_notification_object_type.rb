class RemoveNotificationObjectType < ActiveRecord::Migration
  def change
    remove_column :notifications, :object_type, :integer
  end
end
