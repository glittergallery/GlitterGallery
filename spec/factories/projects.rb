require 'faker'

FactoryGirl.define do
  factory :project do |f|
    f.name { Faker::Lorem.words(2) }
    f.association :user
  end
  factory :project_with_glimages, parent: :project do
    after_create do |project|
      FactoryGirl.create(:glimage, project: project)
    end
  end
end
