class Store < ApplicationRecord
  has_many :items
  has_many :users
  has_many :carts, through: :users
end
