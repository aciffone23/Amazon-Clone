json.cart_items @cart_items.map { |cart_item|
  json.id cart_item.id
  json.quantity cart_item.quantity
  json.product do
    json.id cart_item.product.id
    json.name cart_item.product.name
    json.brand cart_item.product.brand
    json.description cart_item.product.description
    json.dimensions cart_item.product.dimensions
    json.category cart_item.product.category
    json.price cart_item.product.price
  end
}