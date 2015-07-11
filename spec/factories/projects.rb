FactoryGirl.define do
  factory :project do
    name 'testproject'
    association :user
    tag_list %w(bug feature improvement feedback discussion help)

    after(:create) do |project|
      create(:project_member, member_project: project, member: project.user)
    end
  end
end
