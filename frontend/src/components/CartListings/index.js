import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOrUpdateToCart, clearCart, fetchCart, removeFromCart } from '../../store/cart';
import { fetchAllProducts } from '../../store/product';

const CartListings = () => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.session.user.id);

  useEffect(() => {
    dispatch(fetchAllProducts())
},[dispatch])
console.log(userId)

// useEffect(() => {
//     dispatch(addOrUpdateToCart(userId, 3, 5)); // Example usage of addToCart action
// }, [dispatch]);

// useEffect(() => {
//     dispatch(removeFromCart(userId, 1));
// }, [dispatch]);


useEffect(() => {
    dispatch(clearCart(userId));
}, [dispatch]);



  useEffect(() => {
    dispatch(fetchCart())
},[dispatch])
console.log(userId)

  return <div>My Component</div>;
};

export default CartListings;