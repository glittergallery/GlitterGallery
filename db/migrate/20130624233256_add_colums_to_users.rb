class AddColumsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :identity_url, :string
    add_column :users, :username, :string
    add_column :users, :remember_token, :string

    add_index :users, :remember_token
    add_index :users, :identity_url
  end
end
