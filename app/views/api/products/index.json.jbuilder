@products.each do |product|
  json.set! product.id do
    json.photoUrl product.photo.attached? ? url_for(product.photo.url) : nil
    json.extract! product, :id, :brand, :name, :description, :dimensions, :category, :price, :created_at, :average_stars, :review_count
  end
end
