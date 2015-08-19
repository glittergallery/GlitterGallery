require 'spec_helper'

feature 'Users' do
  scenario 'Sees profiles' do
    sign_up_with('t@test.com', 'test1', 'secret12345')
    click_link 'test1'
    expect(page.current_path).to eq('/test1')
    expect(find('.user')).to have_content('@test1')
    click_link 'logout'
    sign_up_with('t2@test.com', 'test2', 'secret12345')
    visit '/test1'
    expect(find('.user')).to have_content('@test1')
  end

  scenario 'Follows and unfollows others but not himself' do
    sign_up_with('t@test.com', 'test1', 'secret12345')
    click_link 'logout'
    sign_up_with('t2@test.com', 'test2', 'secret12345')
    visit '/test1'
    expect(find('#social')).to have_link('Follow test1')
    expect(find('#social')).to have_content('0 Followers')
    expect(find('#social')).to have_content('0 Following')
    click_link 'Follow test1'
    expect(find('#social')).to have_link('Unfollow test1')
    expect(find('#social')).to have_content('1 Followers')
    expect(find('#social')).to have_content('0 Following')
    click_link 'Unfollow test1'
    expect(find('#social')).to have_link('Follow test1')
    expect(find('#social')).to have_content('0 Followers')
    expect(find('#social')).to have_content('0 Following')
    visit '/test2'
    click_link 'Follow test2'
    expect(find('#social')).to have_content('0 Followers')
  end

  describe 'Not logged in' do
    before :each do
      sign_up_with('t@test.com', 'test1', 'secret12345')
      click_link 'logout'
      visit '/test1'
    end

    scenario 'Redirected to login page for HTML requests' do
      click_link 'Follow test1'
      expect(page.current_path).to eq(new_user_session_path)
    end

    scenario 'Redirected to login page for JS requests', js: true do
      click_link 'Follow test1'
      wait_for_ajax
      expect(page.current_path).to eq(new_user_session_path)
    end
  end

  describe 'keys' do
    let(:user) { create(:user) }
    before do
      login_as(user)
      allow_any_instance_of(Key).to receive(:add_to_shell).and_return(true)
    end

    scenario 'adds key to profile' do
      key =
        'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCx3ke+rnMT/ILY81K1un1CWf9ghcP' +
        'glIlV7pMV2H5AwyC/Dx5x+DyKmNmhBmvCYJ+1we8f0pPXLx2QpyAXw8s0s+sBL/gkiz' +
        'sqqwrUzK9Rlkj58kvNFl8gLQk3qqs8dR6bODP9LQqCGhMFErQtDQTvBq91jhWuIIunu' +
        'mK7T+0GWDMf7O9CNdr/aprYrUfuGLggOdz0oPja792V+ay1xWAHEOueKfGvOGFDbQlc' +
        'TT2uI9wYz9RGkLhDNOo4S74W59xMwMpf77XsoTYxcdrAT7WpTlzaj2usbbGBgcBKx5k' +
        'b0dPBOQ3rQadtZnLjN2dZAeapUO2MElyX0lxt1nrbIKC2 addie@host.localdomain'
      visit '/keys'
      fill_in 'key[title]', with: 'test'
      fill_in 'key[key]', with: key
      expect{click_button 'Add key'}.to change{Key.all.count}.by(1)
    end

    context 'key page' do
      before do
        @key = create(:key, user: user)
        visit '/keys'
      end

      it 'sees key' do
        expect(find('table')).to have_content(@key.title)
      end

      it 'removes key' do
        allow_any_instance_of(Key).to receive(:remove_from_shell)
          .and_return(true)
        find('table').click_link 'Remove'
        expect(find('.option')).not_to have_content(@key.title)
      end
    end
  end
end
