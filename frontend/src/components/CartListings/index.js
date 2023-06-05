import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOrUpdateToCart, clearCart, fetchCart, removeFromCart } from '../../store/cart';
import { fetchAllProducts } from '../../store/product';
import './CartListings.css'
import { Link } from 'react-router-dom';

const CartListings = () => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.session.user.id);
  const cartItems = useSelector(state => state.carts.cartItems);

  useEffect(() => {
    dispatch(fetchAllProducts())
},[dispatch])
console.log(userId)

// console.log(userId)
// useEffect(() => {
//   dispatch(addOrUpdateToCart(userId, 3, 5)); 
// }, [dispatch]);

useEffect(() => {
  dispatch(fetchCart())
},[dispatch])

// useEffect(() => {
//     dispatch(removeFromCart(userId, 3));
// }, [dispatch]);


// useEffect(() => {
//     dispatch(clearCart(userId));
// }, [dispatch]);
// console.log(cartItems)




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
        {cartItems.map(cartItem => {
          const product = cartItems.product;

          return (
            <Link to={`/products/${cartItem.id}`} key={cartItem.id} className="cart-product-box">
              
              <img src={cartItem.photoUrl} alt={cartItem.name} className="cart-item-image" />
              <div className="cart-item-details">
                <span className="cart-item-brand">{cartItem.brand}</span>
                <span className="cart-item-name">{cartItem.name}</span>
                <span className="cart-item-review">Review placeholder</span>
                <span className="cart-item-price">${cartItem.price}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CartListings;