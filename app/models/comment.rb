class Comment < ActiveRecord::Base
  belongs_to :user
  validates :body, presence: true

  default_scope { order('comments.created_at ASC')}

  # based on ploycomment_type it deterimnes the user action
  def action
    case polycomment_type
    when 'project'
      'project_comment'
    when 'blob'
      'blob_comment'
    when 'commit'
      'commit_comment'
    when 'tree'
      'tree_comment'
    when 'issue'
      'issue_comment'
    end
  end
end
