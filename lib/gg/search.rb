module Gg
  module Search
    extend self

    # Find files in satellitedir of project which match the
    # given query (with ignore case). Allow delimiters are
    # space and comma.
    def find_files(query, project)
      images = []
      dir = []
      path = File.join project.satellitedir, '/**/*'
      files = Dir[path]
      query = query.gsub(/[ ,]+/, '|')
      files.each do |f|
        next if (/#{query}/i =~ f).nil?
        f_name = f.sub(project.satellitedir + '/', '')
        push = {name: f_name, path: f}
        File.file?(f) ? images << push : dir << push
      end
      [images, dir]
    end
  end
end
