class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :description, :image_url
  has_one :store
end
