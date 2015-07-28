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
        actor =
          if params[:key_id]
            Key.find_by(id: params[:key_id])
          elsif params[:user_id]
            User.find_by(id: params[:user_id])
          end
        @status = true
        @message = ''
      end

      post "/sync" do
        status 200
        Gg::Sync.new(params[:project], params[:changes]).sync_satellite
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
