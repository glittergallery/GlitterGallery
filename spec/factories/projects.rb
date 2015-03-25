FactoryGirl.define do
  factory :project do
    name 'testproject'
    association :user
  end
end
