class Game < ApplicationRecord
  belongs_to :user
  has_many :comments
  has_one :deck
  has_many :cards, :through => :deck

  mount_uploader :vid, VideoRecordingUploader
end
