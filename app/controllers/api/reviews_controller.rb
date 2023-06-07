class Api::ReviewsController < ApplicationController

    def index 

    end

    def show
    end

    def create 
    end


    def review_params
        params.require(:review).permit(:user_id, :product_id, :title, :body, :rating)
    end
end
