json.cart_items @cart_items do |cart_item|
  json.id cart_item.id
  json.quantity cart_item.quantity
  json.merge! cart_item.product.as_json(only: [:id, :name, :brand, :description, :dimensions, :category, :price])
end