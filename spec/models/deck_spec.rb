require 'rails_helper'

RSpec.describe Deck, type: :model do
  it { should belong_to :game }
  it { should have_and_belong_to_many :cards }

  it { should have_valid(:game).when(Game.new) }
  it { should_not have_valid(:game).when(nil) }

  it { should validate_uniqueness_of(:card).scoped_to(:deck) }
end
