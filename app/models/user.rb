class User < ApplicationRecord
  has_many :games
  has_many :comments

  mount_uploader :avatar, AvatarUploader
  acts_as_token_authenticatable
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
