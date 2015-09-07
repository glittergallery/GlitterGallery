class ChangePolycommentType < ActiveRecord::Migration
  def change
    change_column :comments,
                  :polycomment_id,
                  'integer USING CAST(polycomment_id AS integer)'
  end
end
