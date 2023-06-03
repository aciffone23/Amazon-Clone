class Product < ApplicationRecord
    has_many :carts
    has_many :users, through: :carts
    
    has_one_attached :photo
end
