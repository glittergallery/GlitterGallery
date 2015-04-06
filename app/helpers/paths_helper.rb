module PathsHelper
  def project_issues_path(project)
    user_project_issues_path project.user, project, params[:xid]
  end

  def issue_path(issue)
    user_project_issue_path(
      issue.project.user,
      issue.project,
      params[:xid],
      issue
    )
  end

  def close_issue_path(issue)
    close_user_project_issue_path(
      issue.project.user,
      issue.project,
      params[:xid],
      issue
    )
  end

  def reopen_issue_path(issue)
    reopen_user_project_issue_path(
      issue.project.user,
      issue.project,
      params[:xid],
      issue
    )
  end

  def project_commits_path(project)
    commits_user_project_path project.user, project, params[:xid]
  end

  def project_network_path(project)
    network_user_project_path project.user, project, params[:xid]
  end

  def project_newfile_path(project)
    newfile_user_project_path project.user, project, params[:xid]
  end

  def project_fork_path(project)
    fork_user_project_path project.user, project, params[:xid]
  end

  def project_settings_path(project)
    settings_user_project_path project.user, project, params[:xid]
  end

  def project_follow_path(project)
    follow_user_project_path project.user, project, params[:xid]
  end

  def project_unfollow_path(project)
    unfollow_user_project_path project.user, project, params[:xid]
  end

  def project_blob_path(project, destination, branch)
    branch ||= 'master'
    blob_user_project_path(
      project.user,
      project,
      params[:xid],
      branch,
      destination
    )
  end
end
