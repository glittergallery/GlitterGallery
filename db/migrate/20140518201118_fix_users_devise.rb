class FixUsersDevise < ActiveRecord::Migration
  def change
    remove_column :users, :identity_url
    remove_column :users, :remember_token
  end
end
