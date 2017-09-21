class Game < ApplicationRecord
  belongs_to :user
  mount_uploader :vid, VideoRecordingUploader
end
