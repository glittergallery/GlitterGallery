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

	scenario "User creates a public project and other user can see it" do
	  sign_up_with("t@test.com","test1","secret12345")
	  click_button "Create first project!"
	  fill_in "project_name", :with => "testproject1"
	  click_button "Public"
	  click_link "logout"
	  sign_up_with("t2@test.com","test2","secret12345")
	  visit "/inspire"
	  expect(page).to have_no_content("Uh oh, looks like everyone's gotten lazy ;)")
	  expect(page).to have_content('testproject1')
	end
end