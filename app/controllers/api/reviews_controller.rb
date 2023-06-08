class Api::ReviewsController < ApplicationController
    # before_action :require_logged_in, only: [:create]

    def index
        @reviews = Review.where(product_id: params[:product_id])
        render :index
    end

    def create
        user_id = review_params[:user_id]
        product_id = review_params[:product_id]
      
        if Review.exists?(user_id: user_id, product_id: product_id)
            render json: { error: "You have already reviewed this product" }, status: 422
        else
            @review = Review.new(review_params)
            if @review.save
                render json: @review, status: 200
            else
                render json: { errors: @review.errors.full_messages }, status: 422
            end
        end
    end
        


    def review_params
        params.require(:review).permit(:user_id, :product_id, :title, :body, :rating)
    end

    private

    def already_reviewed?(user_id, product_id)
        Review.exists?(user_id: user_id, product_id: product_id)
    end
end
