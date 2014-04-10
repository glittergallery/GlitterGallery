class RemoveAuthorFromComments < ActiveRecord::Migration
  def up
    remove_column :comments, :author
    remove_column :comments, :email
  end

  def down
    add_column :comments, :author, :string
    add_column :comments, :email, :string
  end
end
