class AddColumnToGames < ActiveRecord::Migration[5.1]
  def change
    add_column :games, :user_id, :integer, null: false
  end
end
