class Api::ReviewsController < ApplicationController
    before_action :require_logged_in, only: [:create]
    before_action :find_review, only: [:update]

    def index
        @reviews = Review.where(product_id: params[:product_id])
        render :index
    end

    def create
        user_id = params[:user_id]
        product_id = params[:product_id].to_i
        if Review.exists?(user_id: user_id, product_id: product_id)
          render json: { error: "You have already reviewed this product" }, status: 422
        else
          @review = Review.new(review_params)
          @review.user_id = user_id
          @review.product_id = product_id
          if @review.save
            render json: @review, status: 200
          else
            render json: { errors: @review.errors.full_messages }, status: 422
          end
        end
      end
      

    def update
        # review_params[:product_id] = review_params[:product_id].to_i
        user_id = params[:user_id]
        product_id = params[:product_id]
        review_id = params[:review_id]
        #check if this review exists in your database 
        #find operATION

        #UPDATE THE OBJECT WITH THE NEW THINGS FROM THE FORM 
        #SAVE 
        if @review.update(review_params)
          render json: @review, status: 200
        else
          render json: { errors: @review.errors.full_messages }, status: 422
        end
      end
        

    def review_params
        params.require(:review).permit(:title, :body, :rating)
        # {
        #     user_id: params[:user_id],
        #     product_id: params[:product_id],
        #     title: params[:title],
        #     body: params[:body],
        #     rating: params[:rating]
        # }
    end

    def destroy
        @review = Review.find(params[:id])
        if @review.destroy
          render json: { message: "Review deleted successfully" }, status: 200
        else
          render json: { error: "Failed to delete review" }, status: 422
        end
      end

    private

    def already_reviewed?(user_id, product_id)
        Review.exists?(user_id: user_id, product_id: product_id)
    end   
    
    def find_review
        @review = Review.find_by(id: params[:review_id])
        render json: { error: "Review not found" }, status: 404 unless @review
      end
      
      
end
