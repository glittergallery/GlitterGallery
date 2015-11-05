class CreateAnnotations < ActiveRecord::Migration
  def change
    create_table :annotations do |t|
      t.integer  :user_id
      t.text :json
      t.string :text
      t.string :blob_id
      t.timestamps
    end
    add_index :annotations, :blob_id
  end
end
