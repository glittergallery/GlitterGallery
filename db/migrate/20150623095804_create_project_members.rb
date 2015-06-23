class CreateProjectMembers < ActiveRecord::Migration
  def change
    create_table :project_members do |t|
      t.references :member
      t.references :project
      t.string :role
      t.timestamps
    end
    add_index :project_members, %w(member_id project_id)
  end
end
