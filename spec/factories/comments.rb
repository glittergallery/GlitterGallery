require 'faker'

FactoryGirl.define do
  factory :comment do |f|
    f.author { Faker::Name.name }
    f.email { Faker::Internet.email }
    f.body { Faker::Lorem.paragraph }
  end
end
