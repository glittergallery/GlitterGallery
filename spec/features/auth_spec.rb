require 'spec_helper'

feature "Authentication" do
  scenario "New user signs up via email" do
      visit "/"
      click_link "Sign up"
      fill_in "user_email", :with => "sbanskota08@gmail.com"
      fill_in "user_password", :with => "secret12345"
      fill_in "user_password_confirmation", :with => "secret12345"
      fill_in "user_username", :with => "sarupbanskota"
      click_button "Sign up"
      expect(page.current_path).to eq("/projects/new")    
  end
  scenario "New user signs up via omniauth" do
      visit "/"
      click_link "Facebook"
      expect(page.current_path).to eq("/projects/new")  
  end
  scenario "Existing user signs in via email" do
    @user = FactoryGirl.create(:user)
    visit "/"
    click_link "Sign in"
    fill_in "user_email", :with => @user.email
    fill_in "user_password", :with => "secret12345"   
    click_button "Sign in"
    expect(page.current_path).to eq("/projects/new")
  end
  scenario "Existing user signs up via omniauth" do
    @user = FactoryGirl.create(:user)
    visit "/"
    click_link "Facebook"
    expect(page.current_path).to eq("/projects/new")  
  end
end