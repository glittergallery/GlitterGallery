class AddPathToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :path, :string
  end
end
