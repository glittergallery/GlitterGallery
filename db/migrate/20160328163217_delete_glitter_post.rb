class DeleteGlitterPost < ActiveRecord::Migration
  def change
    drop_table :glitterposts
  end
end
