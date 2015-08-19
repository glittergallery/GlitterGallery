class CreateKeys < ActiveRecord::Migration
  def change
    create_table :keys do |t|
      t.integer  :user_id
      t.text :key
      t.string :title
      t.string :fingerprint

      t.timestamps
    end

    add_index :keys, [:user_id], name: 'index_keys_on_user_id'
  end
end
