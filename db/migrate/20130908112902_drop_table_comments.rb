class DropTableComments < ActiveRecord::Migration
  def up
  	drop_table :comments
  end

  def down
  	create_table :comments
  end
end
