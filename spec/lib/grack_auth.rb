require 'spec_helper'

describe Grack::Auth do
  let(:user)    { create(:user) }
  let(:project) { create(:project) }

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
        env['PATH_INFO'] = '/' + project.user.username + '/' +
           project.name + '.git'
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

          context 'read project commans' do
            shared_examples 'has read access' do |role|
              before do
                create(
                  :project_member,
                  member: user,
                  member_project: project,
                  role: role
                )
              end

              it 'responds with status 200' do
                expect(status).to eq(200)
              end
            end

            it_behaves_like 'has read access', 'reporter'
            it_behaves_like 'has read access', 'collaborator'
            it_behaves_like 'has read access', 'owner'

            context 'does not have read access' do
              it 'responds with status 401' do
                expect(status).to eq(401)
              end
            end
          end

          context 'write project commands' do
            let(:env) do
              {
                'rack.input' => '',
                'REQUEST_METHOD' => 'POST',
                'QUERY_STRING' => 'service=git-recieve-pack'
              }
            end
            before do
              env['PATH_INFO'] = '/' + project.user.username + '/' +
                project.name + '.git' + '/git-receive-pack'
            end

            shared_examples 'has write access' do |role|
              before do
                create(
                  :project_member,
                  member: user,
                  member_project: project,
                  role: role
                )
              end

              it 'responds with status 200' do
                expect(status).to eq(200)
              end
            end

            it_behaves_like 'has write access', 'collaborator'
            it_behaves_like 'has write access', 'owner'

            shared_examples 'doesn not have write access' do |role|
              unless role.nil?
                before do
                  create(
                    :project_member,
                    member: user,
                    member_project: project,
                    role: role
                  )
                end
              end

              it 'responds with status 401' do
                expect(status).to eq(401)
              end
            end

            it_behaves_like 'doesn not have write access', 'reporter'
            it_behaves_like 'doesn not have write access', nil
          end

          context "when the user doesn't have access to the project" do
            it 'responds with status 401' do
              expect(status).to eq(401)
            end
          end
        end
      end
    end
  end
end
