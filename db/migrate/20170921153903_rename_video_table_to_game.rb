class RenameVideoTableToGame < ActiveRecord::Migration[5.1]
  def change
    rename_table :videos, :games
  end
end
