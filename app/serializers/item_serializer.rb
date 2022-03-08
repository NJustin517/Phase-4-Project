class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :description
  has_one :store
end
