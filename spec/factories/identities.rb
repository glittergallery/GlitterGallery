FactoryGirl.define do
  factory :identity do
    uid '123123123123'
    provider 'facebook'
    association :user
  end
end
