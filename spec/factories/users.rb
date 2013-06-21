require 'faker'

FactoryGirl.define do
  factory :user do |f|
    f.email { Faker::Internet.email }
    f.username { Faker::Name.name }
    f.identity_url { Faker::Internet.url }
  end
end
