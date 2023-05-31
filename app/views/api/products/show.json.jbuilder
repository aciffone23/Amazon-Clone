json.product do
        json.extract! @product, :id, :brand, :name, :description, 
        :dimensions, :category, :price, :created_at
end