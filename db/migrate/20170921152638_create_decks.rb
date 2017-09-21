class CreateDecks < ActiveRecord::Migration[5.1]
  def change
    create_table :decks do |t|
      t.integer :game_id, null: false
      t.integer :card_id, null: false

      t.timestamps
    end
  end
end
