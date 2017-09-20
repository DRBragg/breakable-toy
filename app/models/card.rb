class Card < ApplicationRecord
  validates :type, presence: true
  validates :body, presence: true, uniqueness: true
end
