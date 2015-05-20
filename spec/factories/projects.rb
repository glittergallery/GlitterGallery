FactoryGirl.define do
  factory :project do
    name 'testproject'
    association :user
    tag_list %w(bug feature improvement feedback discussion help)
  end
end
