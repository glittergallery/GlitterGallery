class AddColumsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :identity_url, :string
    add_column :users, :username, :string
  end
end
