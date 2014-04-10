class PullTable < ActiveRecord::Migration
  def up
    create_table :pulltable do |t|
      t.string :desc
      t.string :status
      t.string :lastcommit
      t.integer :fork
      t.integer :parent

      t.timestamps
    end
  end

  def down
  end
end
