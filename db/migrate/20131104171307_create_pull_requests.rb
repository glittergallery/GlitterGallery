class CreatePullRequests < ActiveRecord::Migration
  def change
    create_table :pull_requests do |t|

      t.timestamps
    end
  end
end
