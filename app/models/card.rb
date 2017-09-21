class Card < ApplicationRecord
  validates :catagory, presence: true
  validates :body, presence: true, uniqueness: true
end
