require 'spec_helper'

feature 'Projects' do
  scenario 'User creates a public project' do
    @user = FactoryGirl.create(
      :user,
      password: 'secret12345',
      password_confirmation: 'secret12345'
    )
    sign_in_with(@user.email, 'secret12345')
    expect(page.current_path).to eq('/dashboard')
    click_button 'Create first project!'
    fill_in 'project_name', with: 'testproject1'
    click_button 'Public'
    expect(find('.project header')).to have_content('testproject1')
  end

  scenario 'User creates a private project' do
    @user = FactoryGirl.create(
      :user,
      password: 'secret12345',
      password_confirmation: 'secret12345'
    )
    sign_in_with(@user.email, 'secret12345')
    expect(page.current_path).to eq('/dashboard')
    click_button 'Create first project!'
    fill_in 'project_name', with: 'testproject1'
    click_button 'Private'
    expect(find('.project header')).to have_content('testproject1')
  end

  scenario "User deletes a project and can't see it" do
    sign_up_with('t@test.com', 'test1', 'secret12345')
    click_button 'Create first project!'
    fill_in 'project_name', with: 't1'
    click_button 'Public'
    find('.project').click_link 'Settings'
    click_link 'Delete project'
    expect(page.current_path).to eq('/dashboard')
    expect(page).to have_content(
      "Welcome aboard! Without wasting any further time, let's get you started!"
    )
    visit '/test1/t1'
    expect(page).to have_content('The project you requested had been deleted.')
  end

  describe 'Multiple users interaction' do
    before :each do
      sign_up_with('t@test.com', 'test1', 'secret12345')
      click_button 'Create first project!'
      fill_in 'project_name', with: 'public_project'
      click_button 'Public'
      click_link 'New Project'
      fill_in 'project_name', with: 'private_project'
      click_link 'logout'
      sign_up_with('t2@test.com', 'test2', 'secret12345')
    end

    scenario 'Users see public projects of others as inspiring' do
      visit '/inspire'
      expect(page).to have_no_content(
        "Uh oh, looks like everyone's gotten lazy ;)"
      )
      expect(page).to have_content('public_project')
      expect(page).to have_no_content('private_project')
    end

    scenario 'User sees other users projects' do
      visit '/test1/projects'
      expect(page).to have_content('public_project')
      expect(page).to have_no_content('private_project')
    end

    scenario 'User follows and unfollows other users projects' do
      visit '/test1/public_project'
      click_link 'Follow'
      expect(find('.action')).to have_link('Unfollow')
      visit '/test2/followed/projects'
      expect(page).to have_link('public_project')
      click_link 'public_project'
      click_link 'Unfollow'
      expect(find('.action')).to have_link('Follow')
      visit '/test2/followed/projects'
      expect(page).to have_no_content('public_project')
    end

    scenario 'User forks other users projects' do
      visit '/test1/public_project'
      click_link 'Fork'
      expect(page.current_path).to eq('/test2/public_project')
      expect(find('.parent_project')).to have_content(
        'from test1 / public_project'
      )
      click_link 'logout'
      sign_up_with('t3@test.com', 'test3', 'secret12345')
      visit '/test2/public_project'
      click_link 'Fork'
      expect(page.current_path).to eq('/test3/public_project')
      expect(find('.parent_project')).to have_content(
        'from test2 / public_project'
      )
      visit '/test2/projects'
      expect(find('.album')).to have_content(
        'public_project from test1 / public_project'
      )
    end

    scenario 'User sees network of a project including deleted ones' do
      visit 'test1/public_project'
      click_link 'Fork'
      click_link 'logout'
      sign_in_with('t@test.com', 'secret12345')
      visit '/test1/public_project/settings'
      click_link 'Delete project'
      click_link 'logout'
      sign_up_with('t3@test.com', 'test3', 'secret12345')
      visit '/test2/public_project'
      click_link 'Fork'
      click_link 'logout'
      sign_up_with('t4@test.com', 'test4', 'secret12345')
      visit '/test2/public_project'
      click_link 'Fork'
      click_link 'Network'
      expect(find(:xpath, '/html/body/div/article/section/div/ul/li'))
        .to have_link('test1')
      expect(find(:xpath, '/html/body/div/article/section/div/ul/li'))
        .to have_no_link('public_project')
      expect(find(:xpath, '/html/body/div/article/section/div/ul/ul'))
        .to have_no_content('test1')
      expect(find(:xpath, '/html/body/div/article/section/div/ul/ul/li'))
        .to have_link('test2')
      expect(find(:xpath, '/html/body/div/article/section/div/ul/ul/li'))
        .to have_link('public_project')
      expect(find(:xpath, '/html/body/div/article/section/div/ul/ul/ul'))
        .to have_no_content('test2')
      expect(find(:xpath, '/html/body/div/article/section/div/ul/ul/ul/li[1]'))
        .to have_link('test3')
      expect(find(:xpath, '/html/body/div/article/section/div/ul/ul/ul/li[2]'))
        .to have_link('test4')
    end
  end

  shared_examples 'online project services' do |type|

    before :each do
      sign_up_with('t@test.com', 'test1', 'secret12345')
      click_button 'Create first project!'
      fill_in 'project_name', with: 'testproject1'
      if type == 'private'
        click_button 'Private'
      else
        click_button 'Public'
      end
    end

    scenario "User can't create a new branch in an empty project" do
      click_link 'Branches'
      expect(page).to have_no_content 'Create new branch'
      expect(page).to have_content \
        'The project is empty. There are no branches.'
    end

    describe 'After creating a branch' do
      before :each do
        page.attach_file(
          'file[]', 'spec/factories/files/happypanda.png'
        )
        click_button 'Save changes'
        click_link 'Branches'
        fill_in 'branch_name', with: 'test_branch'
        click_button 'Create new branch!'
      end

      scenario 'User is redirected to the branch tree page' do
        project = Project.last
        expect(page.current_path).to eq(
          tree_user_project_path(
            project.user,
            project,
            project.uniqueurl,
            'test_branch'
          )
        )
      end

      scenario 'User sees master images in the branch tree' do
        expect(page).to have_link 'happypanda.png'
        data = find('.album//img')['src']
        click_link 'Branches'
        click_link 'master'
        expect(find('.album//img')['src']).to eq(data)
      end

      scenario 'User sees the branch in the list of branches' do
        click_link 'Branches'
        expect(page).to have_link 'master'
        expect(page).to have_link 'test_branch'
      end

      scenario 'User is not able to create a branch with the same name' do
        project = Project.last
        click_link 'Branches'
        fill_in 'branch_name', with: 'test_branch'
        click_button 'Create new branch!'
        expect(page.current_path).to eq(
          branches_user_project_path(
            project.user,
            project,
            project.uniqueurl
          )
        )
        expect(page).to have_content(
          'Something went wrong! ' +
          "Make sure the branch name doesn't have spaces."
        )
      end

      scenario 'User uploads an image from the tree view' do
        page.attach_file(
          'file[]', 'spec/factories/files/1.png'
        )
        click_button 'Save changes'
        expect(page).to have_content 'test_branch'
        expect(page).to have_content '1.png'
      end

      describe 'After uploading an image to the branch' do
        before :each do
          page.attach_file(
            'file[]', 'spec/factories/files/1.png'
          )
          click_button 'Save changes'
        end

        scenario 'User is redirected to the tree view of the branch' do
          project = Project.last
          expect(page.current_path).to eq(
            tree_user_project_path(
              project.user,
              project,
              project.uniqueurl,
              'test_branch'
            )
          )
        end

        context 'On the new branch' do
          scenario 'User sees his uploaded image along with old images' do
            expect(page).to have_content '1.png'
            expect(page).to have_content 'happypanda.png'
          end

          scenario 'User sees a new commit in the log' do
            click_link 'Log'
            expect(page).to have_content 'Add 1 image: 1.png'
            expect(page).to have_content 'Add 1 image: happypanda.png'
          end
        end

        context 'On master branch' do
          before :each do
            click_link 'Branches'
            click_link 'master'
          end

          scenario 'User sees old images only' do
            expect(page).to have_content 'happypanda.png'
            expect(page).to have_no_content '1.png'
          end

          scenario 'User sees old commits only' do
            click_link 'Log'
            expect(page).to have_content 'Add 1 image: happypanda.png'
            expect(page).to have_no_content 'Add 1 image: 1.png'
          end
        end
      end

      describe 'After updating an image on the branch' do
        before :each do
          all('a', text: 'happypanda.png')[1].click
          @old = find('.album//img')['src']
          page.attach_file(
            'file', 'spec/factories/files/1.png'
          )
          fill_in 'message', with: 'test update on branch'
          click_button 'Save changes'
        end

        scenario 'User is redirected to the new blob page' do
          project = Project.last
          expect(page.current_path).to eq(
            blob_user_project_path(
              project.user,
              project,
              project.uniqueurl,
              'test_branch',
              'happypanda.png'
            )
          )
        end

        context 'On the new branch' do
          scenario 'User sees updated image' do
            expect(find('.album//img')['src']).to_not eq(@old)
          end

          scenario 'User sees a new commit in the log' do
            click_link 'Log'
            expect(page).to have_content('test update on branch')
          end
        end

        context 'On master branch' do
          before :each do
            click_link 'Branches'
            click_link 'master'
            all('a', text: 'happypanda.png')[1].click
          end

          scenario 'User sees old image' do
            expect(find('.album//img')['src']).to eq(@old)
          end

          scenario 'User does not see a new commit in the log' do
            click_link 'Log'
            expect(page).to have_no_content('test update on branch')
          end
        end
      end
    end

    scenario 'User uploads multiple images' do
      page.attach_file(
        'file[]',
        ['spec/factories/files/happypanda.png',
         'spec/factories/files/naruto.png']
      )
      click_button 'Save changes'
      click_link 'Current'
      expect(page).to have_content 'happypanda.png'
      expect(page).to have_content 'naruto.png'
    end

    describe 'After image upload' do
      before :each do
        page.attach_file('file[]', 'spec/factories/files/happypanda.png')
        click_button 'Save changes'
        click_link 'Current'
      end

      scenario 'User sees uploaded image' do
        expect(page).to have_content 'happypanda.png'
        all('a', text: 'happypanda.png')[1].click
        expect(find('.photo')).to have_selector('img')
      end

      scenario 'User sees logs for a project' do
        click_link 'Log'
        expect(page).to have_link 'Add 1 image: happypanda.png'
        last_commit_id = Project.last.barerepo.head.target_id
        expect(page).to have_selector("img[src$='#{last_commit_id}']")
        img_link = find('.feed//article//img')['src']
        visit img_link
        expect(page.status_code).to eq(200)
      end

      scenario 'User comments on a specific commit' do
        click_link 'Log'
        click_link 'Add 1 image: happypanda.png'
        fill_in 'comment_body', with: 'test comment'
        click_button 'Create Comment'
        expect(find('.comments')).to have_content('test comment')
      end

      describe 'After image update' do
        before :each do
          all('a', text: 'happypanda.png')[1].click
          @old = find('.photo//img')['src']
          page.attach_file('file', 'spec/factories/files/1.png')
          fill_in 'message', with: 'updated commit test'
          click_button 'Save changes'
        end

        scenario 'User is redirected to the updated image' do
          project = Project.last
          expect(page.current_path).to eq(
            blob_user_project_path(
              project.user,
              project,
              project.uniqueurl,
              'master',
              'happypanda.png'
            )
          )
        end

        scenario 'User sees updated image' do
          expect(find('.photo')).to have_selector('img')
          expect(find('.photo//img')['src']).not_to eq(@old)
        end

        scenario 'User sees a new commit in the logs' do
          click_link 'Log'
          # Make sure the most recent commit doesn't contain the first message
          expect(first('.feed//article')).to \
            have_no_content 'Add 1 image: happypanda.png'
          expect(first('.feed//article')).to have_content 'updated commit test'
          img_link = first('.feed//article//img')['src']
          visit img_link
          expect(page.status_code).to eq(200)
        end
      end

      describe 'After more images upload' do
        before :each do
          page.attach_file(
            'file[]',
            ['spec/factories/files/naruto.png', 'spec/factories/files/1.png']
          )
          click_button 'Save changes'
          click_link 'Log'
        end

        scenario 'User sees multiple images uploaded together as one commit' do
          expect(page).to have_content('Add 2 images: 1.png and naruto.png')
        end

        scenario 'User sees only files changed in a commit' do
          click_link 'Add 2 images: 1.png and naruto.png'
          expect(page).to have_content('naruto.png')
          expect(page).to have_content('1.png')
          expect(page).to have_no_content('happypanda.png')
          click_link 'Log'
          click_link 'Add 1 image: happypanda.png'
          expect(page).to have_content('happypanda.png')
          expect(page).to have_no_content('naruto.png')
          expect(page).to have_no_content('1.png')
        end

        scenario 'User sees all files at a certain commit through tree' do
          click_link 'Add 1 image: happypanda.png'
          click_button 'Browse files at this commit'
          expect(page).to have_content('happypanda.png')
          expect(page).to have_no_content('naruto.png')
          expect(page).to have_no_content('1.png')
          click_link 'Current'
          click_link 'Log'
          click_link 'Add 2 images: 1.png and naruto.png'
          click_button 'Browse files at this commit'
          expect(page).to have_content('naruto.png')
          expect(page).to have_content('1.png')
          expect(page).to have_content('happypanda.png')
        end
      end
    end

    describe 'After creating a directory' do
      before :each do
        fill_in 'directory', with: 'test dir'
        click_button 'Add Directory'
      end

      scenario 'User is redirected to the new directory path' do
        project = Project.last
        expect(page.current_path).to eq(
          tree_user_project_path(
            project.user,
            project,
            project.uniqueurl,
            'master',
            'test dir'
          )
        )
      end

      scenario 'User sees a new commit in the log with thumbnail' do
        click_link 'Log'
        expect(page).to have_content 'Add directory test dir'
        thumb = first('.feed//img')['src']
        visit thumb
        expect(page.status_code).to eq(200)
      end

      scenario 'User sees the new directory in the project' do
        page.find('.breadcrumb').click_link 'testproject1'
        expect(page).to have_link 'test dir'
      end

      scenario 'User creates a sub directory inside the new directory' do
        project = Project.last
        fill_in 'directory', with: 'test sub dir'
        click_button 'Add Directory'
        expect(page.current_path).to eq(
          tree_user_project_path(
            project.user,
            project,
            project.uniqueurl,
            'master',
            'test dir/test sub dir'
          )
        )
        expect(page).to have_content 'test sub dir'
      end

      scenario 'User sees no files in the new directory' do
        expect(page).to have_content 'There are no files here.'
        expect(page.find('.album')).to have_no_selector('img')
      end

      describe 'After uploading a new image to the directory' do
        before :each do
          page.attach_file(
            'file[]',
            'spec/factories/files/happypanda.png'
          )
          click_button 'Save changes'
        end

        scenario 'User is redirected to the directory path' do
          project = Project.last
          expect(page.current_path).to eq(
            tree_user_project_path(
              project.user,
              project,
              project.uniqueurl,
              'master',
              'test dir'
            )
          )
        end

        scenario 'User sees the new image in the directory' do
          expect(page).to have_no_content 'There are no files here.'
          expect(page.find('.album')).to have_selector('img')
          expect(page.find('.album')).to have_content 'happypanda.png'
        end

        scenario 'User sees a new commit for the added image' do
          click_link 'Log'
          expect(page).to have_content 'Add 1 image: happypanda.png'
          thumb = first('.feed//img')['src']
          visit thumb
          expect(page.status_code).to eq(200)
        end

        scenario 'User does not see the new image outside the directory' do
          page.find('.breadcrumb').click_link 'testproject1'
          expect(page).to have_no_content 'happypanda.png'
        end

        scenario 'User updates the new image' do
          all('a', text: 'happypanda.png')[1].click
          old = find('.album//img')['src']
          page.attach_file(
            'file',
            'spec/factories/files/naruto.png'
          )
          click_button 'Save changes'
          expect(find('.album//img')['src']).to_not eq(old)
        end
      end
    end

  end

  it_behaves_like 'online project services', 'public'

  it_behaves_like 'online project services', 'private'


end
