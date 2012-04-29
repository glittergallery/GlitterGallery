class User < ActiveRecord::Base
  after_create :reposave
  has_one :repo
  has_many :projects, :through => :repo

  # Include default devise modules. Others available are:
  # :token_authenticatable, :encryptable, :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me
  # attr_accessible :title, :body

  private

  def repopath
    File.join "..", "data", "repos", email
  end

  def reposave
    repo = Repo.new :path => repopath 
    repo.user_id = id
    repo.save
  end
end
