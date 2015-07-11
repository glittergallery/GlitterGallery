class CreateProjectMembers < ActiveRecord::Migration
  def change
    create_table :project_members do |t|
      t.references :member
      t.references :gallery
      t.string :role
      t.timestamps
    end
    add_index :project_members, %w(member_id gallery_id)
  end
end
