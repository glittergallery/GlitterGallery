module API
  # Internal access API
  class Internal < Grape::API

    namespace 'internal' do
      # Check if git command is allowed to project
      #
      # Params:
      #   key_id - ssh key id for Git over SSH
      #   user_id - user id for Git over HTTP
      #   project - project path with namespace
      #   action - git action (git-upload-pack or git-receive-pack)
      #   ref - branch name
      #   forced_push - forced_push
      #
      post "/allowed" do
        status 200
      end

      get "/check" do
        {
          api_version: '3.2.0',
          gitlab_version: '3.1.2',
          gitlab_rev: '0.1.1',
        }
      end
    end
  end
end
