class Api::ProductsController < ApplicationController
    def index
      @products = Product.select(:id, :name, :description, :category, :price, :brand, :dimensions, :created_at, 'AVG(reviews.rating) AS average_stars', 'COUNT(reviews.id) AS review_count')
                         .left_outer_joins(:reviews)
                         .group(:id)
      render :index
    end
  
    def show
      @product = Product.find(params[:id])
      render :show
    end
  end
  