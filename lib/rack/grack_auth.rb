module Grack
  class Auth < Rack::Auth::Basic

    attr_accessor :user, :project, :env

    def call(env)
      @env = env
      @request = Rack::Request.new(env)
      @auth = Request.new(env)

      auth!
      if project && authorized_request?
        @app.call(env)
      elsif @user.nil?
        unauthorized
      else
        render_not_found
      end
    end

    private

    def auth!
      return unless @auth.provided?
      return bad_request unless @auth.basic?

      # Authentication with username and password
      login, password = @auth.credentials
      @user = authenticate_user(login, password)
    end

    # return nil if user is not found else return
    # the user object
    def authenticate_user(login, password)
      user = User.find_by(username: login.to_s.downcase)
      if user.nil?
        return nil 
      else
        user if user.valid_password?(password)
      end
    end

    def project
      return @project if defined?(@project)

      @project = project_by_path(@request.path_info)
    end

    def project_by_path(path)
      if m = /^([\w\.\/-]+)\.git/.match(path).to_a
        path_with_namespace = m.last
        path_with_namespace[0] = '' if path_with_namespace.start_with?('/')
        return nil unless path_with_namespace.include?('/')

        # seperate username and project name
        id = path_with_namespace.split('/')
        @project_owner = User.find_by(username: id.first.to_s.downcase)
        Project.with_deleted.find_by user_id: @project_owner.id,
                                     name: id.last.to_s.downcase
      end
    end

    def authorized_request?
      case git_cmd
      when *%w{ git-upload-pack git-upload-archive }
        if user
          user.owner?(project)
        elsif !project.private
          # Allow clone/fetch for public projects
          true
        else
          false
        end
      when *%w{ git-receive-pack }
        if user
          user.owner?(project)
        else
          false
        end
      else
        false
      end
    end

    def git_cmd
      if @request.get?
        @request.params['service']
      elsif @request.post?
        File.basename(@request.path)
      else
        nil
      end
    end

    def render_not_found
      [404, { "Content-Type" => "text/plain" }, ["Not Found"]]
    end
  end
end
