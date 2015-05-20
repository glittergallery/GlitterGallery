# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :issue do
    title 'test issue'
    description 'I am a test'
    tag_list ['bug']
    status 0
    association :project
    association :user
  end
end
