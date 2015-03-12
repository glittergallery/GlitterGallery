require 'spec_helper'

feature "Projects" do
  scenario "User creates a public project" do
    @user = FactoryGirl.create(:user,:password => "secret12345",:password_confirmation => "secret12345")
    sign_in_with(@user.email,"secret12345")
    expect(page.current_path).to eq("/dashboard")
    click_button "Create first project!"
    fill_in "project_name", :with => "testproject1"
    click_button "Public"
    expect(find('.project header')).to have_content('testproject1')
  end

  scenario "User creates a private project" do
    @user = FactoryGirl.create(:user,:password => "secret12345",:password_confirmation => "secret12345")
    sign_in_with(@user.email,"secret12345")
    expect(page.current_path).to eq("/dashboard")
    click_button "Create first project!"
    fill_in "project_name", :with => "testproject1"
    click_button "Private"
    expect(find('.project header')).to have_content('testproject1')
  end

  describe "Multiple users interaction" do
    before :each do
      sign_up_with("t@test.com","test1","secret12345")
      click_button "Create first project!"
      fill_in "project_name", :with => "public_project"
      click_button "Public"
      click_link "New Project"
      fill_in "project_name", :with => "private_project"
      click_link "logout"
      sign_up_with("t2@test.com","test2","secret12345")
    end

    scenario "Users see public projects of others as inspiring" do
      visit "/inspire"
      expect(page).to have_no_content("Uh oh, looks like everyone's gotten lazy ;)")
      expect(page).to have_content('public_project')
      expect(page).to have_no_content("private_project")
    end

    scenario "User sees other users projects" do
      visit "/test1/projects"
      expect(page).to have_content("public_project")
      expect(page).to have_no_content("private_project")
    end

    scenario "User forks other users projects" do
      visit "/test1/public_project"
      click_link "Fork"
      expect(page.current_path).to eq("/test2/public_project")
      expect(find('.parent_project')).to have_content('from test1 / public_project')
      click_link "logout"
      sign_up_with("t3@test.com","test3","secret12345")
      visit "/test2/public_project"
      click_link "Fork"
      expect(page.current_path).to eq("/test3/public_project")
      expect(find('.parent_project')).to have_content('from test2 / public_project')
      visit "/test2/projects"
      expect(find(".album")).to have_content("public_project from test1 / public_project")
    end

    scenario "User sees network of a project" do
      visit "test1/public_project"
      click_link "Fork"
      click_link "logout"
      sign_up_with("t3@test.com","test3","secret12345")
      visit "/test2/public_project"
      click_link "Fork"
      click_link "logout"
      sign_up_with("t4@test.com","test4","secret12345")
      visit "/test2/public_project"
      click_link "Fork"
      click_link "Network"
      expect(find(:xpath,'/html/body/div/article/section/div/ul/li')).to have_link("test1")
      expect(find(:xpath,'/html/body/div/article/section/div/ul/ul')).to have_no_content("test1")
      expect(find(:xpath,'/html/body/div/article/section/div/ul/ul/li')).to have_link("test2")
      expect(find(:xpath,'/html/body/div/article/section/div/ul/ul/ul')).to have_no_content("test2")
      expect(find(:xpath,'/html/body/div/article/section/div/ul/ul/ul/li[1]')).to have_link("test3")
      expect(find(:xpath,'/html/body/div/article/section/div/ul/ul/ul/li[2]')).to have_link("test4")
    end
  end

  describe "After image upload" do

    before :each do
      sign_up_with("t@test.com","test1","secret12345")
      click_button "Create first project!"
      fill_in "project_name", :with => "testproject1"
      click_button "Public"
      click_button "Add first file!"
      page.attach_file("file[]", 'spec/factories/files/happypanda.png')
      click_button "Save changes"
    end

    scenario "User can see uploaded image" do
      expect(page).to have_selector("img[src$='happypanda.png']")
      #TODO: move the following checks into another unit test after settling on a place for their functions.
      project = Project.last
      last_commit_id = project.barerepo.head.target_id
      expect(File.exist?(project.thumbnail_for(last_commit_id,true))).to eq(true)
    end

    scenario "User sees logs for a project" do
      click_link "Log"
      expect(page).to have_link "Add new file happypanda.png"
      last_commit_id = Project.last.barerepo.head.target_id
      expect(page).to have_selector("img[src$='#{last_commit_id}']")
    end

    scenario "User comments on a specific commit" do
      click_link "Log"
      click_link "Add new file happypanda.png"
      fill_in "comment_body", :with => "test comment"
      click_button "Create Comment"
      expect(find('.comments')).to have_content("test comment")
    end
  end
end