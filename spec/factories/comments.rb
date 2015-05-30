FactoryGirl.define do
  factory :comment do
    polycomment_type 'project'
    polycomment_id '1'
    issue false
    body 'fancy comment body'
    association :user
  end
end
