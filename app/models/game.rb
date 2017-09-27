class Game < ApplicationRecord
  belongs_to :user
  has_many :comments
  has_many :decks
  has_many :cards, :through => :decks

  mount_uploader :vid, VideoRecordingUploader
end
