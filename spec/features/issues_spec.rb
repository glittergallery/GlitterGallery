require 'spec_helper'

feature 'Issues' do

  shared_examples 'issue services' do |type, fork|
    before :each do
      sign_up_with('t@test.com', 'test1', 'secret12345')
      click_button 'Create first project!'
      fill_in 'project_name', with: 'testproject1'
      if type == 'private'
        click_button 'Private'
      else
        click_button 'Public'
      end
      if fork
        click_link 'logout'
        sign_up_with('t2@test.com', 'test2', 'secret12345')
        visit 'test1/testproject1'
        click_link 'Fork'
      end
      @project = Project.last
      click_link 'Issues'
      click_button 'Report Issue'
    end

    scenario 'User reports an issue only after filling needed fields' do
      expect{click_button 'Report Issue'}.to_not change{@project.issues.count}
      expect(page).to have_content "Title can't be blank"
      expect(page).to have_content "Description can't be blank"
      expect(page).to have_content "Tag list can't be blank"
      fill_in 'issue[title]', with: 'test_issue'
      expect{click_button 'Report Issue'}.to_not change{@project.issues.count}
      expect(page).to have_no_content "Title can't be blank"
      expect(page).to have_content "Description can't be blank"
      expect(page).to have_content "Tag list can't be blank"
      fill_in 'issue[description]', with: 'this is a test'
      expect(page).to have_content "Tag list can't be blank"
      fill_in 'issue[tag_list]', with: 'bug, feature'
      expect{click_button 'Report Issue'}.to change{@project.issues.count}.by(1)
    end

    describe 'After reporting an issue' do
      before :each do
        fill_in 'issue[title]', with: 'test issue'
        fill_in 'issue[description]', with: 'this is a test'
        fill_in 'issue[tag_list]', with: 'bug'
        click_button 'Report Issue'
      end

      scenario 'User is redirected to the issue' do
        expect(page.current_path).to eq(
          user_project_issue_path(
          @project.user,
          @project,
          @project.uniqueurl,
          @project.issues.first
          )
        )
      end

      scenario 'User sees the issue' do
        expect(page).to have_content 'test issue'
        expect(find('.issue')).to have_content 'this is a test'
      end

      scenario 'User reports another issue' do
        click_link 'Issues'
        click_button 'Report New Issue'
        fill_in 'issue[title]', with: 'another test issue'
        fill_in 'issue[description]', with: 'and this is another test'
        fill_in 'issue[tag_list]', with: 'bug, feature'
        expect{click_button 'Report Issue'}.to\
          change{@project.issues.count}.by(1)
      end

      # TODO: Needs a revisit after defining abilities.
      scenario 'User closes the issue and is redirected to issues page' do
        expect{click_link 'Close'}.to change{@project.issues.closed.count}.by(1)
        expect(@project.issues.open.count).to eq(0)
        expect(page.current_path).to eq(user_project_issues_path(
          @project.user,
          @project,
          @project.uniqueurl
        ))
        expect(page).to have_content 'No Issues to show!'
      end

      scenario 'User comments on the issue' do
        fill_in 'comment[body]', with: 'a test comment'
        expect{click_button 'Create Comment'}.to change{Comment.count}.by(1)
        expect(page).to have_content 'a test comment'
      end

      describe 'After closing the issue' do
        before :each do
          click_link 'Close'
          click_link 'Closed'
        end

        scenario 'User sees closed issues' do
          expect(page).to have_link 'test issue'
          click_link 'test issue'
          expect(page).to have_content 'test issue'
          expect(find('.issue')).to have_content 'this is a test'
        end

        scenario 'User reopens an issue' do
          click_link 'test issue'
          expect(find('//article//aside')).to have_link 'Reopen'
          expect{click_link 'Reopen'}.to \
          change{@project.issues.open.count}.by(1)
          expect(@project.issues.closed.count).to eq(0)
        end
      end
    end
  end

  it_behaves_like 'issue services', 'public'

  it_behaves_like 'issue services', 'private'

  it_behaves_like 'issue services', 'public', 'fork'

  describe 'User can make new tags only if he is owner of project' do
    before :each do
      sign_up_with('t@test.com', 'test1', 'secret12345')
      click_button 'Create first project!'
      fill_in 'project_name', with: 'testproject1'
      click_button 'Public'
      @project = Project.last
    end

    scenario 'owner of project can make new tags' do
      click_link 'Issues'
      click_button 'Report Issue'
      fill_in 'issue[title]', with: 'test_issue'
      fill_in 'issue[description]', with: 'this is a test'
      fill_in 'issue[tag_list]', with: 'bug, new_tag'
      expect{click_button 'Report Issue'}.to change{@project.issues.count}.by(1)
    end

    scenario 'new tags are in context of project' do
      click_link 'New Project'
      fill_in 'project_name', with: 'testproject2'
      click_button 'Public'
      @project = Project.last
      expect(@project.tag_list).not_to include('new_tag')
    end

    describe 'General user' do
      before :each do
        click_link 'logout'
        sign_up_with('t2@test.com', 'test2', 'secret12345')
        visit 'test1/testproject1'
        click_link 'Issues'
        click_button 'Report Issue'
        fill_in 'issue[title]', with: 'test_issue'
        fill_in 'issue[description]', with: 'this is a test'
      end

      scenario 'can creates issue with exisiting tags' do
        fill_in 'issue[tag_list]', with: 'bug, feature'
        expect{click_button 'Report Issue'}
          .to change{@project.issues.count}.by(1)
      end

      scenario 'can not creates issue with new tags' do
        fill_in 'issue[tag_list]', with: 'bug, more_tag'
        expect{click_button 'Report Issue'}.to_not change{@project.issues.count}
      end
    end
  end

end
