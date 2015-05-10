class RemoveTypeFromIssues < ActiveRecord::Migration
  def change
    remove_column :issues, :type
  end
end
