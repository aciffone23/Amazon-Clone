import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOrUpdateToCart, clearCart, fetchCart, removeFromCart } from '../../store/cart';
import { fetchAllProducts } from '../../store/product';
import './CartListings.css'
import { Link } from 'react-router-dom';

const CartListings = () => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.session.user.id);
  let cartItems = useSelector(state => state.carts.cartItems);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);


  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCart())
  }, [dispatch]);


  useEffect(() => {
    let quantity = 0;
    let price = 0;
    cartItems.forEach(item => {
      quantity += item.quantity;
      price += item.quantity * item.price;
    });
    setTotalQuantity(quantity);
    setTotalPrice(price.toFixed(2));
  }, [cartItems]);

  const handleQtyChange = (e, productId) => {
    const quantity = e.target.value;
    if (quantity === '0') {
      dispatch(removeFromCart(userId, productId))
        .then(() => dispatch(fetchCart()));
    } else {
      dispatch(addOrUpdateToCart(userId, productId, quantity))
        .then(() => dispatch(fetchCart())); 
    }
  };

  cartItems = cartItems.sort((a, b) => a.id - b.id);

  if (cartItems.length === 0) {
    return <div>Your cart is empty.</div>; 
  }

  const handleClearCart = () => {
    dispatch(clearCart(userId));
  };


  return (
    <div className="cart-listings-container">
      <div className="cart-heading">
        <div className="cart-heading-left">
          <h1>Shopping Cart</h1>
        </div>
        <div className="cart-heading-right">
          <h2>Price</h2>
        </div>
      </div>

      

      <div className="cart-product-listings">
        {cartItems.map((cartItem, index) => {

          return (
            <div key={`${cartItem.id}-${index}`} className="cart-product-box">
              <Link to={`/products/${cartItem.id}`}>
                <img src={cartItem.photoUrl} alt={cartItem.name} className="cart-item-image" />
              </Link>
              <div className="cart-item-details">
              <span className="cart-item-price">${cartItem.price}</span>
                <Link to={`/products/${cartItem.id}`} className="cart-item-name">
                  {cartItem.name}
                </Link>
                <span className="cart-item-brand">{cartItem.brand}</span>
                <h5 className="cart-stock">In Stock</h5>
                <select
                  className="cart-item-quantity"
                  value={cartItem.quantity}
                  onChange={(e) => handleQtyChange(e, cartItem.id)}
                >
                  <option value={0}>Qty: 0 (Delete)</option>
                  <option value={1}>Qty: 1</option>
                  <option value={2}>Qty: 2</option>
                  <option value={3}>Qty: 3</option>
                  <option value={4}>Qty: 4</option>
                  <option value={5}>Qty: 5</option>
                  <option value={6}>Qty: 6</option>
                  <option value={7}>Qty: 7</option>
                  <option value={8}>Qty: 8</option>
                  <option value={9}>Qty: 9</option>
                  <option value={10}>Qty: 10</option>
                </select>
              </div>
            </div>
          );
        })}
      </div>
      <button className="clear-cart-btn" onClick={handleClearCart}>Clear Cart</button>
      <div className="cart-summary">
        <p className="cart-total-quantity">Subtotal ({totalQuantity} items):<span className="cart-total-price">${totalPrice}</span></p>
      </div>

    </div>
  );
};

export default CartListings;
