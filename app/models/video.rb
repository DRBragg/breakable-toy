class Video < ApplicationRecord
  mount_uploader :vid, VideoRecordingUploader
end
