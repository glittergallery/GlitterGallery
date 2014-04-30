class AddUrlbaseToProject < ActiveRecord::Migration
  def change
    add_column :projects, :urlbase, :string
  end
end
