class MakeProjectsPublicByDefault < ActiveRecord::Migration
  def up
    change_column :projects, :private, :boolean, default: false
  end

  def down
  	change_column :projects, :private, :boolean
  end
end
