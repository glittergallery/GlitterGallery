class AddIssueToComments < ActiveRecord::Migration
  def change
    add_column :comments, :issue, :boolean
  end
end
