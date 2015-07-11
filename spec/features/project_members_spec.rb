require 'spec_helper'
include Models::ProjectMembersHelper

feature 'ProjectMembers' do
  let(:user) { create(:user) }
  let(:user2) { create(:user) }
  let(:project) { create(:project, user: user) }
  describe 'project owner actions' do
    before { login_as(user) }

    scenario 'adds members' do
      visit "/#{user.username}/#{project.name}/settings"
      fill_in 'search', with: "#{user2.username}"
      click_button 'Search'
      expect(find('.option')).to have_content("#{user2.username}")
      click_button 'Add'
      expect(find('table')).to have_content("#{user2.username} collaborator")
    end

    scenario 'removes members' do
      make_member project, user2
      visit "/#{user.username}/#{project.name}/settings"
      find('table').click_link 'Remove'
      expect(find('table')).not_to have_content("#{user2.username}")
    end
  end

  describe 'members action' do
    before do
      make_member project, user2
      login_as(user2)
    end
    scenario 'removes himself' do
      visit "/#{user2.username}"
      find('table').click_link 'Remove'
      expect(find('#activity'))
        .not_to have_content("#{user2.username} collaborator")
    end
  end
end
