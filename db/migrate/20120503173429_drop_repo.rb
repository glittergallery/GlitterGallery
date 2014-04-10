class DropRepo < ActiveRecord::Migration
  def up
    drop_table :repos
  end

  def down
    create_table :repos
  end
end
