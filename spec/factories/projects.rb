require 'faker'

FactoryGirl.define do
  factory :project do |f|
    f.name { Faker::Lorem.words(2).join(" ") }
    f.association :user
  end
end
