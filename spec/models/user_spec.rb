require 'rails_helper'

RSpec.describe User, type: :model do
  it { should have_many :games }
  it { should have_many :comments }

  it { should have_valid(:email).when('someone@email.com', 'anyone@email.net') }
  it { should_not have_valid(:email).when('', nil, 'user', 'email@@com') }

  it { should have_valid(:username).when('DRBragg', 'Username123') }
  it { should_not have_valid(:username).when('', nil) }
  it { should validate_uniqueness_of(:username) }

  it 'has a mathcing password and password confirmation' do
    user = User.new
    user.username = 'user123'
    user.email = 'valid@email.com'
    user.password = 'password'
    user.password_confirmation = 'passwordconfirmation'

    expect(user).to_not be_valid
    expect(user.errors[:password_confirmation]).to_not be_blank
  end

  it { should have_valid(:game).when(Game.new) }
  it { should_not have_valid(:game).when(nil) }
end
