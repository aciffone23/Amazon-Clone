json.extract! @product, :id, :brand, :name, :description, :dimensions, :category, :price, :created_at
json.photoUrl @product.photo.attached? ? url_for(@product.photo.url) : nil 