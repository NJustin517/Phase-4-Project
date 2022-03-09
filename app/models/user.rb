class User < ApplicationRecord
  has_secure_password
  belongs_to :store
  has_many :carts

  validates :username, presence: true, uniqueness: true
  # validates :email, 
  # format: { with: /^(.+)@(.+)$/, message: "Email invalid"  },
  # uniqueness: { case_sensitive: false },
  # length: { minimum: 4, maximum: 254 }

 def cart_sum
  if self.carts.length > 0
  return self.carts.sum { |c| c.item.price }
  else
     return 0
  end
 end

end
