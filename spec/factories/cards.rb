require 'faker'

FactoryGirl.define do
  factory :card do 
    catagory "Catagory"
    body {Faker::ChuckNorris.unique.fact}
  end
end
