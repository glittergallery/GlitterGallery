# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "multi_json"
  s.version = "1.3.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 1.3.6") if s.respond_to? :required_rubygems_version=
  s.authors = ["Michael Bleigh", "Josh Kalderimis", "Erik Michaels-Ober"]
  s.date = "2012-04-17"
  s.description = "A gem to provide easy switching between different JSON backends, including Oj, Yajl, the JSON gem (with C-extensions), the pure-Ruby JSON gem, and OkJson."
  s.email = ["michael@intridea.com", "josh.kalderimis@gmail.com", "sferik@gmail.com"]
  s.extra_rdoc_files = ["LICENSE.md", "README.md"]
  s.files = ["LICENSE.md", "README.md"]
  s.homepage = "http://github.com/intridea/multi_json"
  s.post_install_message = "********************************************************************************\n\n  MultiJson.encode is deprecated and will be removed in the next major version.\n  Use MultiJson.dump instead.\n\n  MultiJson.decode is deprecated and will be removed in the next major version.\n  Use MultiJson.load instead.\n\n  MultiJson.engine is deprecated and will be removed in the next major version.\n  Use MultiJson.adapter instead.\n\n  MultiJson.engine= is deprecated and will be removed in the next major\n  version. Use MultiJson.use instead.\n\n  MultiJson.default_engine is deprecated and will be removed in the next major\n  version. Use MultiJson.default_adapter instead.\n\n********************************************************************************\n"
  s.rdoc_options = ["--charset=UTF-8"]
  s.require_paths = ["lib"]
  s.rubygems_version = "1.8.15"
  s.summary = "A gem to provide swappable JSON backends."

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<rake>, ["~> 0.9"])
      s.add_development_dependency(%q<rdoc>, ["~> 3.9"])
      s.add_development_dependency(%q<rspec>, ["~> 2.6"])
      s.add_development_dependency(%q<simplecov>, ["~> 0.4"])
    else
      s.add_dependency(%q<rake>, ["~> 0.9"])
      s.add_dependency(%q<rdoc>, ["~> 3.9"])
      s.add_dependency(%q<rspec>, ["~> 2.6"])
      s.add_dependency(%q<simplecov>, ["~> 0.4"])
    end
  else
    s.add_dependency(%q<rake>, ["~> 0.9"])
    s.add_dependency(%q<rdoc>, ["~> 3.9"])
    s.add_dependency(%q<rspec>, ["~> 2.6"])
    s.add_dependency(%q<simplecov>, ["~> 0.4"])
  end
end
