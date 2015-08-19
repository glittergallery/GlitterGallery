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

  after_create :add_to_shell
  after_destroy :remove_from_shell

  def shell_id
    "key-#{id}"
  end

  private

  def generate_fingerprint
    self.fingerprint = nil

    return unless key.present?

    self.fingerprint = Gg::KeyFingerprint.new(key).fingerprint
  end

  # add the key to authorized file and limit access to git
  # only commands
  def add_to_shell
    Gg::Shell.add_key(shell_id, key)
  end

  # remove key from authorized files after key is deleted
  def remove_from_shell
    Gg::Shell.remove_key(shell_id, key)
  end

  def strip_white_space
    self.key = key.strip unless key.blank?
  end
end
