require 'spec_helper'

describe Grack::Auth do
  let(:user)    { create(:user) }
  let(:project) { create(:project, user: user) }

  let(:app)  { ->(_env) { [200, {}, 'Success!'] } }
  let!(:auth) { Grack::Auth.new(app) }
  let(:env) do
    {
      'rack.input' => '',
      'REQUEST_METHOD' => 'GET',
      'QUERY_STRING' => 'service=git-upload-pack'
    }
  end
  let(:status) { auth.call(env).first }

  describe '#call' do
    context "when the project doesn't exist" do
      before do
        env['PATH_INFO'] = 'doesnt/exist.git'
      end

      context 'when no authentication is provided' do
        it 'responds with status 401' do
          expect(status).to eq(401)
        end
      end

      context 'when username and password are provided' do
        context 'when authentication fails' do
          before do
            cred = ActionController::HttpAuthentication::Basic
              .encode_credentials(user.username, 'nope')
            env['HTTP_AUTHORIZATION'] = cred
          end

          it 'responds with status 401' do
            expect(status).to eq(401)
          end
        end

        context 'when authentication succeeds' do
          before do
            cred = ActionController::HttpAuthentication::Basic
              .encode_credentials(user.username, user.password)
            env['HTTP_AUTHORIZATION'] = cred
          end

          it 'responds with status 404' do
            expect(status).to eq(404)
          end
        end
      end
    end

    context 'when the project exists' do
      before do
        env['PATH_INFO'] = '/' + user.username + '/' + project.name + '.git'
      end

      context 'when the project is public' do
        before do
          project.update_attribute(:private, false)
        end

        it 'responds with status 200' do
          expect(status).to eq(200)
        end
      end

      context 'when the project is private' do
        before do
          project.update_attribute(:private, true)
        end

        context 'when no authentication is provided' do
          it 'responds with status 401' do
            expect(status).to eq(401)
          end
        end

        context 'when username and password are provided' do
          context 'when authentication fails' do
            before do
              cred = ActionController::HttpAuthentication::Basic
                .encode_credentials(user.username, 'nope')
              env['HTTP_AUTHORIZATION'] = cred
            end

            it 'responds with status 401' do
              expect(status).to eq(401)
            end
          end
        end

        context 'when authentication succeeds' do
          before do
            cred = ActionController::HttpAuthentication::Basic
              .encode_credentials(user.username, user.password)
            env['HTTP_AUTHORIZATION'] = cred
          end

          it 'responds with status 200' do
            expect(status).to eq(200)
          end
        end
      end
    end
  end
end
