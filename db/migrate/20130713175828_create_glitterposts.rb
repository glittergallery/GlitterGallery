class CreateGlitterposts < ActiveRecord::Migration
  def change
    create_table :glitterposts do |t|
      t.string :title
      t.text :content
     
      t.timestamps
    end
  end
end
