require 'spec_helper'

describe NotificationsHelper, type: :helper do
  let(:notification) { create(:notification) }

  describe '#notif_string' do
    it 'returns appeneded username and messageverb' do
      expected_string = notification.actor.username + notification.messageverb
      expect(notif_string notification).to eq(expected_string)
    end
  end
end
