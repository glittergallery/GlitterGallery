class RemoveParentFromProjects < ActiveRecord::Migration
  def change
    remove_column :projects, :parent, :integer
  end
end
