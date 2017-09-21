class Deck < ApplicationRecord
  has_many :cards
  belongs_to :game

  validates :card_id, presence: true
  validates :game_id, presence: true
end
