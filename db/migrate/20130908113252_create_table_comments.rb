class CreateTableComments < ActiveRecord::Migration
  def change
  	create_table :comments do |t|
	    t.text :body
	    t.string :polycomment_id
	    t.string :polycomment_type
	    t.integer :user_id
	    t.boolean :issue

	    t.timestamps
    end

    add_index :comments, :polycomment_id
  end
end
