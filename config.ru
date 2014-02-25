
# This file is used by Rack-based servers to start the application.

require './lib/rack/git_http'

require ::File.expand_path('../config/environment',  __FILE__)
run Glitter::Application

map '/health' do
  health = proc do |env|
    [200, { "Content-Type" => "text/html" }, ["1"]]
  end
  run health
end


map '/git' do
  use Rack::ShowExceptions

  config = {
    :project_root => "#{ENV["OPENSHIFT_DATA_DIR"]}/repos",
    :git_path => '/usr/bin/git',
    :upload_pack => true,
    :receive_pack => true,
  }

  run GitHttp::App.new(config)

end
