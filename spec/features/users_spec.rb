require 'spec_helper'

feature "Users" do
  scenario "Sees profiles" do
    sign_up_with("t@test.com","test1","secret12345")
    click_link "test1"
    expect(page.current_path).to eq("/test1")
    expect(find('.user')).to have_content("@test1")
    click_link "logout"
    sign_up_with("t2@test.com","test2","secret12345")
    visit "/test1"
    expect(find('.user')).to have_content("@test1")
  end
  
  scenario "Follows and unfollows others but not himself" do
    sign_up_with("t@test.com","test1","secret12345")
    click_link "logout"
    sign_up_with("t2@test.com","test2","secret12345")
    visit "/test1"
    expect(find('#social')).to have_link("Follow test1")
    expect(find('#social')).to have_content("0 Followers")
    expect(find('#social')).to have_content("0 Following")
    click_link "Follow test1"
    expect(find('#social')).to have_link("Unfollow test1")
    expect(find('#social')).to have_content("1 Followers")
    expect(find('#social')).to have_content("0 Following")
    click_link "Unfollow test1"
    expect(find('#social')).to have_link("Follow test1")
    expect(find('#social')).to have_content("0 Followers")
    expect(find('#social')).to have_content("0 Following")
    visit "/test2"
    click_link "Follow test2"
    expect(find('#social')).to have_content("0 Followers")
  end
end