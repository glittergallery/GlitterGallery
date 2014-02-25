require 'faker'

FactoryGirl.define do
  factory :glimage do |f|
    f.file 'example.svg'
  end
  factory :glimage_with_project, parent: :glimage do |f|
    f.association :project
  end
end
