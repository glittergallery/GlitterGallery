class AddParentToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :parent, :integer
  end
end
