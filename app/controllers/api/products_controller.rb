class Api::ProductsController < ApplicationController
    def index 
        # Rails.logger.info("Category: #{params[:category]}")
        # if params[:category].present?
        #     @products = Product.where('category LIKE ?', "%#{params[:category]}%")
        # else
        #     @products = Product.all
        # end
        @products = Product.all
        render 'api/products/index'
    end

    

    def show 
        @product = Product.find(params[:id])
        render 'api/products/show'
    end

end