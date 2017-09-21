require 'rails_helper'

RSpec.describe Game, type: :model do
  it { should belong_to :user }
  it { should have_many :comments }
  it { should have_one :deck }
  it { should have_many(:cards).through(:deck) }

  it { should have_valid(:deck).when(Deck.new) }
  it { should_not have_valid(:deck).when(nil) }
end
