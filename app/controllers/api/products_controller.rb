class Api::ProductsController < ApplicationController
    def index 
        if params[:category].present?
          category = params[:category].downcase
          @products = Product.where('LOWER(category) = ?', category)
        else
          @products = Product.all
        end
        render 'api/products/index'
    end

    def show 
        @product = Product.find(params[:id])
        render 'api/products/show'
    end

end