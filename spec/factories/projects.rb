require 'faker'

FactoryGirl.define do
  factory :project do |f|
    f.name { Faker::Lorem.words(2) }
    f.association :user
  end
  factory :project_with_glimages, parent: :project do |f|
    f.glimages { |g| [g.association(:glimage)] }
  end
end
