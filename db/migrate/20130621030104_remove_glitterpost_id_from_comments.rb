class RemoveGlitterpostIdFromComments < ActiveRecord::Migration
  def up
    remove_column :comments, :glitterpost_id
  end


  def down
    add_column :comments, :glitterpost_id, :integer
  end
end
