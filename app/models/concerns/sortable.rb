# == Sortable concern
#
# find project on basis of given option
# most methods use table join (may need refactoring)
module Sortable
  extend ActiveSupport::Concern

  included do

    scope :find_most_active, lambda {
      joins("LEFT OUTER JOIN comments
             ON comments.polycomment_id = projects.id
             AND comments.polycomment_type='project'
             LEFT OUTER JOIN issues ON issues.project_id = projects.id
             AND issues.status=1")
     .where('private = ? AND
             comments.created_at > ?
             OR issues.updated_at > ?', false, 10.days.ago, 10.days.ago)
     .group('projects.id')
     .order('count(comments.polycomment_id)+4*count(issues.project_id)
             desc')
    }
    scope :find_most_followers, lambda {
      joins('LEFT OUTER JOIN project_followers
             ON project_followers.project_id = projects.id')
     .group('projects.id')
     .order('count(project_followers.project_id) desc')
     .where('private = ?', false)
    }
    scope :find_higest_stars, lambda {
      joins('LEFT OUTER JOIN rating_caches
             ON rating_caches.cacheable_id = projects.id')
     .order('rating_caches.avg desc NULLS LAST')
     .where('private = ?', false)
    }
    scope :find_most_forks, lambda {
      joins('LEFT OUTER JOIN projects p1
             ON projects.id = CAST(p1.ancestry AS integer)')
     .group('projects.id')
     .order('count(p1.ancestry) desc')
     .where('projects.private = ?', false)
    }
    scope :find_most_recent, lambda {
      order('created_at DESC').where('private = ?', false)
    }
    scope :find_last_updated, lambda {
      order('updated_at DESC').where('private = ?', false)
    }
  end

  module ClassMethods
    def order_by(method)
      case method.to_s
      when 'activity' then find_most_active
      when 'followers' then find_most_followers
      when 'stars' then find_higest_stars
      when 'forks' then find_most_forks
      when 'newest' then find_most_recent
      when 'last updated' then find_last_updated
      else
        all
      end
    end
  end
end
