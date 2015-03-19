module Models
  module RepositoryHelpers

    # Initializes a dummy repo with 1 commit at the project repo path.
    def initialize_dummy_repo project
      dummy_repo_path = "spec/factories/repos/dummy.git"
      repo = Rugged::Repository.new dummy_repo_path
      bare = repo.remotes['bare'] || repo.remotes.create('bare',project.barerepopath)
      repo.push bare, ['refs/heads/master']
    end
  end
end