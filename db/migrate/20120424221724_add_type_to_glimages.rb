class AddTypeToGlimages < ActiveRecord::Migration
  def change
    add_column :glimages, :type, :string
  end
end
