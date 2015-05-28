class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new # guest user (not logged in)
    if user.new_record?
      guest
    else
      signed_in
      project_owner(user)
    end
  end

  def guest
    can [:index,
         :blob,
         :branches,
         :show,
         :network,
         :commits,
         :commit,
         :tree,
         :file_history
        ], Project

    can [:index, :show], Issue
  end

  def signed_in
    guest # Inherits abilities of guest
    can [:new,
         :create,
         :follow,
         :unfollow,
         :fork,
         :open
        ], Project

    can [:new, :create], Comment
    can [:new, :create], Issue
  end

  def project_owner(user)
    can [:file_upload,
         :file_delete,
         :settings,
         :newfile,
         :create_directory,
         :create_branch,
         :destroy,
         :update,
         :file_update
         ], Project do |project|
      project.try(:user_id) == user.id
    end

    can [:destroy], Comment do |comment|
      comment.try(:user_id) == user.id
    end

    can [:close, :reopen], Issue do |issue|
      issue.try(:user_id) == user.id || issue.project.user == user
    end
  end
end
