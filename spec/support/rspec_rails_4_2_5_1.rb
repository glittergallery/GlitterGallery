# Fix for rspec-rails and rails 4.2.5.1
# Can be removed as soon as rspec-rails fixes this
# Error: undefined method `cache' for nil:NilClass

RSpec::Rails::ViewRendering::EmptyTemplatePathSetDecorator.class_eval do
  alias_method :find_all_anywhere, :find_all
end
