import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/cart';
import { fetchAllProducts } from '../../store/product';

const CartListings = () => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.session.user.id);

  useEffect(() => {
    dispatch(fetchAllProducts())
},[dispatch])
console.log(userId)

useEffect(() => {
    dispatch(addToCart(userId, 4, 2)); // Example usage of addToCart action
}, [dispatch]);
console.log('second')
  // Rest of your component code...

  return <div>My Component</div>;
};

export default CartListings;