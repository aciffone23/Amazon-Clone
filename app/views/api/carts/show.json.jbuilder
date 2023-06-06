json.array! @cart_items.each do |cart_item|
  json.quantity cart_item.quantity
  json.id cart_item.product.id
  json.photoUrl cart_item.product.photo.attached? ? url_for(cart_item.product.photo.url) : nil
  json.extract! cart_item.product, :id, :brand, :name, :description, :dimensions, :category, :price, :created_at
end

