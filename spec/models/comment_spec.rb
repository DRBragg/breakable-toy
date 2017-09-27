require 'rails_helper'

RSpec.describe Comment, type: :model do
  it { should have_valid(:body).when('I am a body', "I'm also a body") }
  it { should_not have_valid(:body).when('', nil) }

  it { should belong_to :user }
  it { should belong_to :game }

  it { should have_valid(:user).when(User.new) }
  it { should have_valid(:game).when(Game.new) }
end
