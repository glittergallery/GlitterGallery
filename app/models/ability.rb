class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new # guest user (not logged in)
    if user.new_record?
      guest(user)
    else
      signed_in(user)
      write_acess(user)
      owner(user)
    end
  end

  # returns true if project is public or else it
  # checks if user is member of project
  def check_acess(project, user)
    return true unless project.private
    ProjectMember.member? project, user
  end

  def guest(user)
    can [:index,
         :blob,
         :branches,
         :show,
         :network,
         :commits,
         :commit,
         :tree,
         :file_history,
         :diff
        ], Project do |project|
      check_acess project, user
    end

    can [:index, :show], Issue do |issue|
      check_acess issue.project, user
    end
  end

  def signed_in(user)
    guest(user) # Inherits abilities of guest
    can [:new,
         :create,
         :follow,
         :unfollow,
         :fork,
         :open
        ], Project do |project|
      check_acess project, user
    end

    # TODO: allow comment only on public projects
    can [:new, :create], Comment
    can [:new, :create], Issue
    can [:new, :create], Annotation
  end

  # owners and collaborators have write acess
  def write_acess(user)
    can [:file_upload,
         :file_delete,
         :settings,
         :newfile,
         :create_directory,
         :create_branch,
         :update,
         :file_update
         ], Project do |project|
      ProjectMember.write_acess(project, user)
    end

    # ones with write acess can also open and close any issue
    can [:close, :reopen], Issue do |issue|
      p = issue.project
      issue.try(:user_id) == user.id || ProjectMember.write_acess(p, user)
    end
  end

  def owner(user)
    can [:destroy], Project do |project|
      project.try(:user_id) == user.id
    end

    # TODO: project owner should be able to delete comments
    can [:destroy], Comment do |comment|
      comment.try(:user_id) == user.id
    end

    # project owner can remove members as well as members
    # can remembers can remove themselves
    can [:destroy], ProjectMember do |pm|
      proj_user = pm.member_project.user
      (proj_user == user || pm.member.id == user.id) && pm.role != 'owner'
    end

    # only annotation owner can edit or delete annotation
    can [:update, :destroy], Annotation do |annotation|
      annotation.try(:user_id) == user.id
    end
  end
end
