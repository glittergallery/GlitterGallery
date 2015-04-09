class AddSubIdToIssues < ActiveRecord::Migration
  def change
    add_column :issues, :sub_id, :integer
  end
end
