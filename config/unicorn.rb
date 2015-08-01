# Set the working application directory
# working_directory "/path/to/your/app"

app_path = File.expand_path(File.dirname(__FILE__) + '/..')

working_directory app_path

# Unicorn PID file location
pid app_path + "/tmp/pids/unicorn.pid"

# Unicorn socket
listen app_path + '/tmp/sockets/unicorn.sock', backlog: 64

listen(3000, backlog: 64) if ENV['RAILS_ENV'] == 'development'



worker_processes 2
timeout 300
preload_app true

before_fork do |server, worker|

  Signal.trap 'TERM' do
    puts 'Unicorn master intercepting TERM and sending myself QUIT instead'
    Process.kill 'QUIT', Process.pid
  end

  defined?(ActiveRecord::Base) and
    ActiveRecord::Base.connection.disconnect!
end

after_fork do |server, worker|

  Signal.trap 'TERM' do
    puts 'Unicorn worker intercepting TERM and doing nothing. Wait for master to sent QUIT'
  end

  defined?(ActiveRecord::Base) and
    ActiveRecord::Base.establish_connection
end
