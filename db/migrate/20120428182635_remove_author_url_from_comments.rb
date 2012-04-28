class RemoveAuthorUrlFromComments < ActiveRecord::Migration
  def up
    remove_column :comments, :author_url
  end

  def down
    add_column :comments, :author_url, :string
  end
end
