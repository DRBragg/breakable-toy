require 'rails_helper'

RSpec.describe Deck, type: :model do
  it { should belong_to :game }
  it { should belong_to :card }

  it { should have_valid(:game).when(Game.new) }
  it { should_not have_valid(:game).when(nil) }

  it { should have_valid(:card).when(Card.new) }
  it { should_not have_valid(:card).when(nil) }
end
