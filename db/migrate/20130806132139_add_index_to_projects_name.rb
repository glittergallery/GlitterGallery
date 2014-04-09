class AddIndexToProjectsName < ActiveRecord::Migration
  def change
  	add_index :projects, [:name, :user_id], :unique=>true
  end
end


