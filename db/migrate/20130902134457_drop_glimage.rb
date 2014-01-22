class DropGlimage < ActiveRecord::Migration
  def up
  	drop_table :glimages
  end

  def down
  	create_table :glimages
  end
end
