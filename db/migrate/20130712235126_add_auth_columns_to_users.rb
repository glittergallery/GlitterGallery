class AddAuthColumnsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :identity_url, :string
    add_column :users, :username, :string
    add_column :users, :remember_token, :string

    add_index :users, :identity_url, unique: true
    add_index :users, :remember_token, unique: true
  end
end
