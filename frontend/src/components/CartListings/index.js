import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOrUpdateToCart, clearCart, fetchCart, removeFromCart } from '../../store/cart';
import { fetchAllProducts } from '../../store/product';
import './CartListings.css'

const CartListings = () => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.session.user.id);
  const cartItems = useSelector(state => state.carts.cartItems);

  useEffect(() => {
    dispatch(fetchAllProducts())
},[dispatch])
console.log(userId)

// useEffect(() => {
//     dispatch(addOrUpdateToCart(userId, 5, 5)); 
// }, [dispatch]);

// useEffect(() => {
//     dispatch(removeFromCart(userId, 3));
// }, [dispatch]);


// useEffect(() => {
//     dispatch(clearCart(userId));
// }, [dispatch]);
// console.log(cartItems)



  useEffect(() => {
    dispatch(fetchCart())
},[dispatch])
console.log(userId)

  return <div>My Cart</div>;
};

export default CartListings;