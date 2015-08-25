require 'spec_helper'
include FileHelper

feature 'History' do
  let(:user) { create(:user) }
  let(:project) { create(:project, user: user) }

  describe 'commits' do
    before do
      login_as(user)
      add_image project, 'happypanda.png'
      @commit1 = project.barerepo.head.target.oid
      update_image project, 'happypanda.png', 'naruto.png'
      @commit2 = project.barerepo.head.target.oid
    end

    it 'sees all the previous commits' do
      visit "/#{user.username}/#{project.name}/history/master/happypanda.png"
      expect(all('form')[1]).to have_content('Add 1 image: happypanda.png')
      expect(all('form')[1]).to have_content('updated image happypanda.png')
    end

    describe 'fills form' do
      before do
        visit "/#{user.username}/#{project.name}/history/master/happypanda.png"
        select 'toggle', from: 'compare_type'
      end

      context 'correct checkboxs' do
        it 'gets directed to diff page' do
          find("#compare_[value='#{@commit1}']").set(true)
          find("#compare_[value='#{@commit2}']").set(true)
          click_button 'Check'
          diff_path = "#{user.username}/#{project.name}/diff/"
          expect(current_path).to have_content(diff_path)
        end
      end

      context 'incorrect number of checkboxs' do
        it 'gets directed to diff page' do
          find("#compare_[value='#{@commit2}']").set(true)
          click_button 'Check'
          history_path = "#{user.username}/#{project.name}/history/"
          expect(current_path).to have_content(history_path)
          expect(find('.alert')).to have_content('select two commits')
        end
      end
    end
  end
end
