class Card < ApplicationRecord
  has_and_belongs_to_many :decks

  validates :catagory, presence: true
  validates :body, presence: true, uniqueness: true
end
