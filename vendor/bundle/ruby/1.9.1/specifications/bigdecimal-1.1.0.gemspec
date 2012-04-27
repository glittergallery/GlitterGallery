# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "bigdecimal"
  s.version = "1.1.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["Kenta Murata", "Shigeo Kobayashi"]
  s.date = "2011-07-30"
  s.description = "This library provides arbitrary-precision decimal floating-point number class."
  s.email = "mrkn@mrkn.jp"
  s.extensions = ["extconf.rb"]
  s.files = ["extconf.rb"]
  s.homepage = "http://www.ruby-lang.org"
  s.require_paths = ["."]
  s.rubygems_version = "1.8.15"
  s.summary = "Arbitrary-precision decimal floating-point number library."

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
    else
    end
  else
  end
end
