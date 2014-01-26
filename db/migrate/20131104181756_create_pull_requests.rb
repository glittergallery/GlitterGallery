class CreatePullRequests < ActiveRecord::Migration
  def change
    create_table :pull_requests do |t|
      t.string :desc
      t.string :lastcommit
      t.string :status
      t.integer :parent
      t.integer :fork

      t.timestamps
    end
  end
end
