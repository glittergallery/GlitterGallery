class AddAncestryToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :ancestry, :string
    add_index :projects, :ancestry
  end
end
