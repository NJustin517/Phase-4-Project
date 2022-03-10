class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :cart_sum, :cart_count
  has_one :store
  has_many :carts
end
