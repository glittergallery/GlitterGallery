# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "grit"
  s.version = "2.4.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["Tom Preston-Werner", "Scott Chacon"]
  s.date = "2011-01-13"
  s.description = "Grit is a Ruby library for extracting information from a git repository in an object oriented manner."
  s.email = "tom@github.com"
  s.extra_rdoc_files = ["README.md", "LICENSE"]
  s.files = ["README.md", "LICENSE"]
  s.homepage = "http://github.com/mojombo/grit"
  s.rdoc_options = ["--charset=UTF-8"]
  s.require_paths = ["lib"]
  s.rubyforge_project = "grit"
  s.rubygems_version = "1.8.15"
  s.summary = "Ruby Git bindings."

  if s.respond_to? :specification_version then
    s.specification_version = 2

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<mime-types>, ["~> 1.15"])
      s.add_runtime_dependency(%q<diff-lcs>, ["~> 1.1"])
      s.add_development_dependency(%q<mocha>, [">= 0"])
    else
      s.add_dependency(%q<mime-types>, ["~> 1.15"])
      s.add_dependency(%q<diff-lcs>, ["~> 1.1"])
      s.add_dependency(%q<mocha>, [">= 0"])
    end
  else
    s.add_dependency(%q<mime-types>, ["~> 1.15"])
    s.add_dependency(%q<diff-lcs>, ["~> 1.1"])
    s.add_dependency(%q<mocha>, [">= 0"])
  end
end
