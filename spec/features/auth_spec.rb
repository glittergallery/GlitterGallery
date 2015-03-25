require 'spec_helper'

feature 'Authentication' do
  scenario 'New user signs up via email' do
    sign_up_with(
      'sbanskota08@gmail.com',
      'sarupbanskota',
      'secret12345',
      'secret12345'
    )
    expect(page.current_path).to eq('/dashboard')
  end

  scenario 'New user signs up via omniauth' do
    visit '/'
    click_button 'Facebook'
    expect(page.current_path).to eq('/dashboard')
  end

  scenario 'Existing user signs in via email' do
    @user = FactoryGirl.create(
      :user,
      password: 'secret12345',
      password_confirmation: 'secret12345'
    )
    sign_in_with(@user.email, 'secret12345')
    expect(page.current_path).to eq('/dashboard')
  end

  scenario 'Existing user signs up via omniauth' do
    @user = FactoryGirl.create(:user)
    visit '/'
    click_button 'Facebook'
    expect(page.current_path).to eq('/dashboard')
  end
end
