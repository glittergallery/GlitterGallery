class ChangeGlimagesTypeToFiletype < ActiveRecord::Migration
  def change
    rename_column :glimages, :type, :filetype
  end
end
