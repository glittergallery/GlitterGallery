# Read about factories at https://github.com/thoughtbot/factory_girl
require 'faker'

FactoryGirl.define do
  factory :user do
    email { Faker::Internet.email }
    identity_url { Faker::Internet.url }
    username { Faker::Internet.user_name }
  end
end
