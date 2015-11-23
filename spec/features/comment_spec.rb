require 'spec_helper'
include FileHelper

feature 'Comments' do
  let(:project) { create(:project) }
  let(:user) { create(:user) }
  let(:issue) { create(:issue) }

  def fill_and_check_comment
    fill_in 'comment[body]', with: 'Lorem ipsum dolor sit amet'
    click_button 'Create Comment'
    expect(page).to have_content 'Lorem ipsum dolor sit amet'
  end

  context 'user is signed in' do
    before { login_as user }

    scenario 'user comments on project', js: true do
      visit project.urlbase
      fill_and_check_comment
    end

    scenario 'user comments on issue', js: true do
      visit issue.show_url
      fill_and_check_comment
    end

    describe 'after image upload' do
      before { add_image project, 'happypanda.png' }

      scenario 'user comments on blob', js: true do
        visit blob_user_project_path(
                project.user,
                project,
                project.uniqueurl,
                'master',
                'happypanda.png'
              )
        fill_and_check_comment
      end

      scenario 'user comments on tree', js: true do
        visit tree_user_project_path(
                project.user,
                project,
                project.uniqueurl,
                'master'
              )
        fill_and_check_comment
      end

      scenario 'user comments on commit', js: true do
        visit commit_user_project_path(
                project.user,
                project,
                project.uniqueurl,
                project.barerepo.head.target_id
              )
        fill_and_check_comment
      end
    end
  end

  context 'user is not signed in' do
    scenario 'user sees sign in request' do
      visit project.urlbase
      expect(page).to have_content 'You need to login to be able to comment!'
    end
  end
end
