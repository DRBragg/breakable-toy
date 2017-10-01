require 'faker'

FactoryGirl.define do
  factory :card do
    catagory "Catagory"
    body {Faker::Internet.unique.password(8)}
  end
end
