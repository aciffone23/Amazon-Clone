class Api::CartsController < ApplicationController
    before_action :require_logged_in, only: [:checkout]

  def show
    @cart = current_user.cart
  end

#   def update
#     @cart = current_user.cart
#     if @cart.update(cart_params)
#       redirect_to cart_path, notice: 'Cart updated successfully.'
#     else
#       flash.now[:alert] = 'Failed to update cart.'
#       render 'api/cart/show'
#     end
#   end

  
  private
  
  def current_cart
    if logged_in?
      current_user.cart || create_cart
    else
      cart_id = session[:cart_id]
      if cart_id.present?
        cart = Cart.find_by(id: cart_id)
        return cart if cart.present? && cart.user.nil?
      end
  
      cart = Cart.create
      session[:cart_id] = cart.id
      cart
    end
  end

  def create_cart
    Cart.create(user: current_user)
  end

  def cart_params
    params.require(:cart).permit(:quantity)
  end

end
