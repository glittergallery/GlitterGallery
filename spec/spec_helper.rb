# This file is copied to spec/ when you run 'rails generate rspec:install'
ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rspec/rails'
require 'capybara/rspec'

# Requires supporting ruby files with custom matchers and macros, etc,
# in spec/support/ and its subdirectories.
Dir[Rails.root.join('spec/support/**/*.rb')].each {|f| require f}

OmniAuth.config.test_mode = true
OmniAuth.config.mock_auth[:facebook] = OmniAuth::AuthHash.new({
  provider: 'facebook',
  uid: '123123123123',
  info: {
    email: 'sbanskota08@gmail.com',
    nickname: 'sarupbanskota'
  }
})

RSpec.configure do |config|
  # ## Mock Framework
  #
  # If you prefer to use mocha, flexmock or RR, uncomment the appropriate line:
  #
  # config.mock_with :mocha
  # config.mock_with :flexmock
  # config.mock_with :rr

  Capybara.javascript_driver = :webkit

  config.include Devise::TestHelpers, type: :controller
  config.include Features::SessionHelpers, type: :feature
  config.include WaitForAjax, type: :feature
  # Remove this line if you're not using ActiveRecord or ActiveRecord fixtures
  config.fixture_path = "#{::Rails.root}/spec/fixtures"

  # If you're not using ActiveRecord, or you'd prefer not to run each of your
  # examples within a transaction, remove the following line or assign false
  # instead of true.
  config.use_transactional_fixtures = true

  # If true, the base class of anonymous controllers will be inferred
  # automatically. This will be the default behavior in future versions of
  # rspec-rails.
  config.infer_base_class_for_anonymous_controllers = false

  config.after(:each) do
    if Rails.env.test? || Rails.env.cucumber?
      FileUtils.rm_rf(File.join(
        Rails.root,
        Glitter::Application.config.repo_dir
      ))
    end
    DatabaseCleaner.clean
  end

  config.use_transactional_fixtures = false

  config.before :each do
    if Capybara.current_driver == :rack_test
      DatabaseCleaner.strategy = :transaction
    else
      page.driver.block_unknown_urls
      DatabaseCleaner.strategy = :truncation
    end
    DatabaseCleaner.start
  end

  # Run tests in a random order.
  config.order = 'random'
end
