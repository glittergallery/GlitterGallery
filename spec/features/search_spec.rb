require 'spec_helper'
include FileHelper

feature 'Search' do
  describe 'wesbite search' do
    before do
      @project1 = create(:project)
      @project2 = create(:project, name: 'fancy_project')
      visit '/'
    end

    scenario 'user search for projects', js: true do
      find('form>input').set('fancy' + "\n")
      expect(find('.album')).to have_content(@project2.name)
      expect(find('.album')).not_to have_content(@project1.name)
    end
  end

  describe 'project search' do
    before do
      @project = create(:project)
      visit "/#{@project.user.username}/#{@project.name}"
    end

    context 'issues' do
      before do
        @issue1 = create(:issue, project: @project)
        @issue2 = create(:issue, title: '99 problems', project: @project)
      end

      scenario 'user searchs for isssue', js: true do
        find('form>input').set('problems' + "\n")
        click_link 'Issues'
        expect(find('#issues')).to have_content(@issue2.title)
        expect(find('#issues')).not_to have_content(@issue1.title)
      end
    end

    context 'files' do
      before { add_image @project, 'happypanda.png' }

      scenario 'user searchs for file', js: true do
        find('form>input').set('happy' + "\n")
        expect(find('#files')).to have_content('happypanda.png')
      end
    end
  end
end
