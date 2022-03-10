class User < ApplicationRecord
  has_secure_password
  belongs_to :store
  has_many :carts
  has_many :items, through: :carts

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

 def cart_count
if self.carts.length > 0
  return self.carts.length
else return 0
end

 end

 def cart
   self.items
 end

end
