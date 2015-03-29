# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :issue do
    title 'I am an Issue.'
    description 'You better be respectful!'
    type 0 # bug
    status 0 # open
    association :user, username: 'Writely', email: 'writely@gg.com'
    association :project
  end
end
