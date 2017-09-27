class Deck < ApplicationRecord
  belongs_to :card
  belongs_to :game

  validates :card_id, presence: true
  validates :game_id, presence: true
end
