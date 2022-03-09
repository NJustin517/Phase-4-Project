class User < ApplicationRecord
  has_secure_password
  belongs_to :store
  has_many :carts

  validates :username, presence: true, uniqueness: true
  # validates :email, 
  # format: { with: /^(.+)@(.+)$/, message: "Email invalid"  },
  # uniqueness: { case_sensitive: false },
  # length: { minimum: 4, maximum: 254 }
end
