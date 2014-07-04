class CreateNotificationStatuses < ActiveRecord::Migration
  def change
    create_table :notification_statuses do |t|
      t.references :victim
      t.references :notification
      t.boolean :seen
      t.timestamps
    end
  end
end
