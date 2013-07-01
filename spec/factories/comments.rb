require 'faker'

  FactoryGirl.define do
    factory :comment do |f|
    f.body { Faker::Lorem.paragraph }
  end
end
