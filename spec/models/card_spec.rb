require 'rails_helper'

RSpec.describe Card, type: :model do
  it { should have_many :decks }

  it { should have_valid(:catagory).when('I am a catagory', "I'm also a catagory") }
  it { should have_valid(:body).when('I am a body', "I'm also a body") }
end
