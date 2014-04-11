class AddUniqueurlToProject < ActiveRecord::Migration
  def change
    add_column :projects, :uniqueurl, :string
  end
end
