class Product < ApplicationRecord
    has_many :carts
    has_many :reviews
    has_one_attached :photo
end
