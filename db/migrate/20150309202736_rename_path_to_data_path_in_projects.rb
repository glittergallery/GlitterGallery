class RenamePathToDataPathInProjects < ActiveRecord::Migration
  def change
    change_table :projects do |t|
      t.rename :path, :data_path
    end
  end
end
