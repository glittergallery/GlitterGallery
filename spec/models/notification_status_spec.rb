require 'spec_helper'

describe NotificationStatus do
  let(:notification_status) { create(:notification_status) }

  it 'has a valid factory' do
    expect(notification_status).to be_valid
  end
end
