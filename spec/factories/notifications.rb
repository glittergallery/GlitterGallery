FactoryGirl.define do
  factory :notification do
    association :actor, factory: :user
    action 0
    model_id 1
    url 'http://domain.name/user/project'

    after(:create) do |notification|
      new_user = create(:user)
      notification.notification_statuses << create(
        :notification_status,
        notification: notification,
        victim: new_user
      )
    end
  end
end
