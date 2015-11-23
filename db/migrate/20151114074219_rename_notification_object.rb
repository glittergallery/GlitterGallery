class RenameNotificationObject < ActiveRecord::Migration
  def change
    rename_column :notifications, :object_id, :model_id
  end
end
