module Gg
  class KeyFingerprint
    include Gg::Popen

    attr_accessor :key

    def initialize(key)
      @key = key
    end

    def fingerprint
      cmd_status = 0
      cmd_output = ''

      Tempfile.open('gitlab_key_file') do |file|
        file.puts key
        file.rewind

        cmd = []
        cmd.push *%W(ssh-keygen)
        cmd.push *%W(-E md5) if explicit_fingerprint_algorithm?
        cmd.push *%W(-lf #{file.path})

        cmd_output, cmd_status = popen(cmd, '/tmp')
      end
      return nil unless cmd_status.zero?

      # 16 hex bytes separated by ':', optionally starting with "MD5:"
      fingerprint_matches = cmd_output.match(/(MD5:)?(?<fingerprint>(\h{2}:){15}\h{2})/)
      return nil unless fingerprint_matches

      fingerprint_matches[:fingerprint]
    end

    private

    def explicit_fingerprint_algorithm?
      # OpenSSH 6.8 introduces a new default output format for fingerprints.
      # Check the version and decide which command to use.

      version_output, version_status = popen(%W(ssh -V))
      return false unless version_status.zero?

      version_matches = version_output.match(/OpenSSH_(?<major>\d+)\.(?<minor>\d+)/)
      return false unless version_matches

      if (version_matches[:major]+'.'+version_matches[:minor]).to_i >= 6.8
        return true
      else
        return false
      end
    end
  end
end
