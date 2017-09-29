require 'rails_helper'

RSpec.describe Game, type: :model do
  it { should belong_to :user }
  it { should have_many :comments }
  it { should have_many :decks }
  it { should have_many(:cards).through(:decks) }

  it { should have_valid(:user).when(User.new) }
  it { should_not have_valid(:user).when(nil) }
end
