@products.each do |product|
  json.set! product.id do
    json.photoUrl product.photo.attached? ? url_for(product.photo.url) : nil
    json.extract! product, :id, :brand, :name, :description, :dimensions, :category, :price, :created_at

    json.reviews product.reviews do |review|
      json.extract! review, :id, :title, :body, :rating, :created_at
      json.author review.user.name
    end

    json.average_stars product.reviews.average(:rating).to_f if product.reviews.present?
  end
end
