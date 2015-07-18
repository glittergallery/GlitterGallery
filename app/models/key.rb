require 'digest/md5'

class Key < ActiveRecord::Base

  belongs_to :user

  before_validation :strip_white_space, :generate_fingerprint

  validates :title, presence: true, length: { within: 0..255 }
  validates :key, presence: true,
                  length: { within: 0..5000 },
                  format: { with: /\A(ssh|ecdsa)-.*\Z/ },
                  uniqueness: true
  validates :key, format: { without: /\n|\r/, message: 'not a single line' }
  validates :fingerprint, uniqueness: true,
                          presence: { message: 'cannot be generated' }

  def strip_white_space
    self.key = key.strip unless key.blank?
  end

  # projects that has this key
  def projects
    user.authorized_projects
  end

  def shell_id
    "key-#{id}"
  end

  private

  def generate_fingerprint
    self.fingerprint = nil

    return unless key.present?

    self.fingerprint = Gg::KeyFingerprint.new(key).fingerprint
  end
end
