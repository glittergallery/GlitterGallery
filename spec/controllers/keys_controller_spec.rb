require 'spec_helper'

describe KeysController, type: :controller do
  let(:user) { create(:user) }
  before { sign_in(user) }

  describe 'GET index' do
    it 'renders the index template' do
      get :index
      expect(response).to render_template('index')
    end
  end

  describe 'POST create' do
    before do
      allow_any_instance_of(Key).to receive(:add_to_shell).and_return(true)
    end
    it 'adds key and redirects to key path' do
      ssh_key =
        'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCx3ke+rnMT/ILY81K1un1CWf9ghcP' +
        'glIlV7pMV2H5AwyC/Dx5x+DyKmNmhBmvCYJ+1we8f0pPXLx2QpyAXw8s0s+sBL/gkiz' +
        'sqqwrUzK9Rlkj58kvNFl8gLQk3qqs8dR6bODP9LQqCGhMFErQtDQTvBq91jhWuIIunu' +
        'mK7T+0GWDMf7O9CNdr/aprYrUfuGLggOdz0oPja792V+ay1xWAHEOueKfGvOGFDbQlc' +
        'TT2uI9wYz9RGkLhDNOo4S74W59xMwMpf77XsoTYxcdrAT7WpTlzaj2usbbGBgcBKx5k' +
        'b0dPBOQ3rQadtZnLjN2dZAeapUO2MElyX0lxt1nrbIKC2 addie@host.localdomain'
      post :create, key: { title: 'test', key: ssh_key }
      expect(Key.last.title).to eq('test')
      expect(response).to redirect_to(keys_path)
    end
  end

  describe 'DELETE destroy' do
    before do
      allow_any_instance_of(Key).to receive(:add_to_shell).and_return(true)
      allow_any_instance_of(Key).to receive(:remove_from_shell).and_return(true)
      @request.env['HTTP_REFERER'] = 'http://test.host/keys'
    end
    it 'removes key and redirects to key path' do
      key = create(:key, user: user)
      delete :destroy, id: key.id
      expect(Key.all.count).to be(0)
      expect(response).to redirect_to(keys_path)
    end
  end
end
