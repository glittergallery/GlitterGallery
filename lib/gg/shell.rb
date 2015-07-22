module Gg
  class Shell
    class AccessDenied < StandardError; end

    class KeyAdder < Struct.new(:io)
      def add_key(id, key)
        io.puts("#{id}\t#{key.strip}")
      end
    end

    def self.add_key(key_id, key_content)
      Gg::Utils.system_silent([gg_shell_keys_path,
                                'add-key', key_id, key_content])
    end

    def self.remove_key(key_id, key_content)
      Gg::Utils.system_silent([gg_shell_keys_path,
                                'rm-key', key_id, key_content])
    end

    protected

    def self.gg_shell_keys_path
      File.join('/home', 'addie','gitlab-shell', 'bin', 'gitlab-keys')
    end
  end
end
