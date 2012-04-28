class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :author 
      t.string :author_url 
      t.text :body 
      t.integer :responding_to 
      t.references :glimage

      t.timestamps
    end
  end
end
