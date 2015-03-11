class RenameParentInProject < ActiveRecord::Migration
  def change
  	rename_column :projects, :parent, :parent_id
  end
end
