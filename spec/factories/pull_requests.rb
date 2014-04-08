# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :pull_request do
    desc ""
    lastcommit ""
    status ""
    parent ""
    fork 1
  end
end
