require 'rails_helper'

RSpec.describe Card, type: :model do
  it { should have_and_belong_to_many :decks }

  it { should have_valid(:catagory).when('I am a catagory', "I'm also a catagory") }
  it { should have_valid(:body).when('I am a body', "I'm also a body") }

  it { should validate_uniqueness_of(:body).scoped_to(:catagory) }
end
