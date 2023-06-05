class Api::CartsController < ApplicationController
    # before_action :require_logged_in
    before_action :set_user, only: [:show, :destroy]
    # before_action :set_cart, only: [:destroy, :update]

    def create

      @cart = Cart.find_or_initialize_by(user_id: params[:user_id], product_id: params[:product_id])
      @cart.quantity ||= 0 
      @cart.quantity = params[:quantity].to_i
      unless @cart.save
        render json: { errors: @cart.errors.full_messages }, status: :unprocessable_entity
        return
      end
    
      @user = User.find(params[:user_id])
      render :show
    end
    
    def show
      @cart_items = Cart.includes(:product).where(user_id: @user.id)
      render :show
    end
  
    def update
      # @cart = Cart.find_or_initialize_by(user_id: params[:user_id], product_id: params[:product_id])
      # @cart.quantity ||= 0 
      # @cart.quantity += params[:quantity].to_i
      # unless @cart.update
      #   render json: { errors: @cart.errors.full_messages }, status: :unprocessable_entity
      #   return
      # end
    
      # @user = User.find(params[:user_id])
      # render :show
    end
    
    def destroy
      if !params[:product_id].blank?
        @cart_items = Cart.includes(:product).where(user_id: params[:user_id], product_id: params[:product_id])
        @cart_items.where(product_id: params[:product_id]).destroy_all
      else 
        @cart_items = Cart.includes(:product).where(user_id: params[:user_id])
        @cart_items.destroy_all
      end
      render :show
    end
  
    private
  
    def set_user
      @user = current_user
      render json: { errors: ['User not found'] }, status: :not_found unless @user
    end
  
    def set_cart
      @cart = Cart.find_by(user_id: @user.id, product_id: params[:productId])
      render json: { errors: ['Cart item not found'] }, status: :not_found unless @cart
    end
  end
