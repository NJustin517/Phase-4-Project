class User < ApplicationRecord
  belongs_to :store
  has_many :carts
end
