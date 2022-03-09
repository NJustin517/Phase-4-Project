class User < ApplicationRecord
  belongs_to :store
  has_many :carts

  validates :name, presence: true
  validates :email, 
  format: { with: /^(.+)@(.+)$/, message: "Email invalid"  },
  uniqueness: { case_sensitive: false },
  length: { minimum: 4, maximum: 254 }
end
