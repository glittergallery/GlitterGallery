FactoryGirl.define do
  factory :project_member do
    association :member_project, factory: :project
    association :member, factory: :user
    role 'owner'
  end
end
