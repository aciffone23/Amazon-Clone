@products.each do |product|
    json.set! product.id do 
        json.extract! product, :id, :brand, :name, :description, :dimensions, :category, :price, :created_at
    end
end