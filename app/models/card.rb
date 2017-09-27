class Card < ApplicationRecord
  has_many :decks
  has_many :games, :through => :decks

  validates :catagory, presence: true
  validates :body, presence: true, uniqueness: true
end
