FactoryGirl.define do
  factory :notification_status do
    association :victim, factory: :user
    association :notification
  end
end
