json.extract! @product, :id, :brand, :name, :description, :dimensions, :category, :price, :created_at
json.photoUrl @product.photo.attached? ? url_for(@product.photo.url) : nil

json.reviews @product.reviews do |review|
  json.extract! review, :id, :title, :body, :rating, :created_at
  json.author review.user.name
end

json.averageStars @product.average_stars || 0
json.reviewCount @product.review_count || 0