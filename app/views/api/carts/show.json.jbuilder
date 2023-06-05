json.extract! @cart.user, :id, :name, :email
json.cart do
  json.id @cart.id
  json.quantity @cart.quantity
  json.products do
    json.extract! @user.cart.product, :id, :name, :description, :price
    json.photoUrl url_for(@cart.product.photo)
  end
end