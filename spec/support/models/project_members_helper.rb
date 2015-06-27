module Models
  module ProjectMembersHelper
    # defines relationship between user and project
    def make_member(project, user, role = 'collaborator')
      create(
        :project_member,
        member: user,
        member_project: project,
        role: role
      )
    end
  end
end
