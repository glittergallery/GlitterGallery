require 'faker'

FactoryGirl.define do
  factory :glitterpost do
    title { Faker::Lorem.sentence }
    content { Faker::Lorem.paragraph }
  end
end
