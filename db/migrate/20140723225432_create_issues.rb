class CreateIssues < ActiveRecord::Migration
  def change
    create_table :issues do |t|
      t.text :title
      t.text :description
      t.references :project
      t.references :user
      t.integer :status
      t.integer :type
      t.timestamps
    end
  end
end
