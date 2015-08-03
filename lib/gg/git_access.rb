module Gg
  class GitAccess
    DOWNLOAD_COMMANDS = %w{ git-upload-pack git-upload-archive }
    PUSH_COMMANDS = %w{ git-receive-pack }

    attr_reader :actor, :project

    def initialize(actor, project)
      @actor    = actor
      @project  = project
    end


    def check(cmd)
      unless actor
        return build_status_object(false, "No user or key was provided.")
      end

      unless project
        return build_status_object(false, 'The project you were looking for could not be found.')
      end

      case cmd
      when *DOWNLOAD_COMMANDS
        download_access_check
      when *PUSH_COMMANDS
        push_access_check
      else
        build_status_object(false, "The command you're trying to execute is not allowed.")
      end
    end

    private

    def download_access_check
      return build_status_object(true) if ProjectMember.member?(project, actor) or !project.private
      build_status_object(false, "You are not allowed to download code from this project.")
    end

    def push_access_check
      return build_status_object(true) if ProjectMember.write_acess(project, actor)
      build_status_object(false, "You are not allowed to push code to this project.")
    end

    def build_status_object(status, message = '')
      GitAccessStatus.new(status, message)
    end
  end
end
