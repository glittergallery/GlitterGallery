module Features
  module SessionHelpers
    def sign_in_with(email, password)
      visit '/'
      fill_in 'user_email', with: email
      fill_in 'user_password', with: password
      click_button 'Login'
    end

    def sign_up_with(email, username, password, password_confirm = password)
      visit '/'
      click_link 'Sign Up?'
      fill_in 'user_email', with: email
      fill_in 'user_password', with: password
      fill_in 'user_password_confirmation', with: password_confirm
      fill_in 'user_username', with: username
      click_button 'Sign up!'
    end
  end
end
