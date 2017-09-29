require 'faker'

FactoryGirl.define do
  factory :user do
    email {Faker::Internet.email}
    username {Faker::Pokemon.name}
    password "password"
    password_confirmation "password"
  end
end
