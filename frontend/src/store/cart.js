import csrfFetch from "./csrf";

export const RECEIVE_CART_ITEM = 'cart/RECEIVE_CART_ITEM';
export const RECEIVE_CART_ITEMS = 'cart/RECEIVE_CART_ITEMS';
export const REMOVE_CART_ITEM = 'cart/REMOVE_CART_ITEM';
// export const UPDATE_CART = 'UPDATE_CART';

export const receiveCartItem = (productId, quantity) => ({
    type: RECEIVE_CART_ITEM,
    payload: {productId, quantity}
  });
  
export const removeCartItem = productId => ({
    type: REMOVE_CART_ITEM,
    productId
});

export const receiveCartItems = (item) => ({
  type: RECEIVE_CART_ITEMS, 
  payload: {item}
})
  
// export const updateCart = item => ({
//     type: UPDATE_CART,
//     item,
// });

export const fetchCart = () => async (dispatch) => {
    const response = await csrfFetch('/api/cart');
    const data = await response.json();
    data.cartItems.forEach((item) => {
      dispatch(receiveCartItems(item));
    })
};

export const addToCart = (userId, productId, quantity) => async (dispatch) => {
  try {
    const response = await csrfFetch('/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, productId, quantity }),
    });
    if (response.ok) {
      const data = await response.json();
      dispatch(receiveCartItem(data.productId, data.quantity));
    } else {
      throw new Error('Request failed with status ' + response.status);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};


const initialState = {
    cartItems: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case RECEIVE_CART_ITEM:
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      case REMOVE_CART_ITEM:
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.id !== action.payload),
        };
      case RECEIVE_CART_ITEMS:
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        }
    //   case UPDATE_CART:
    //     return {
    //       ...state,
    //       cartItems: state.cartItems.map(item =>
    //         item.id === action.payload.id ? action.payload : item
    //       ),
    //     };
      default:
        return state;
    }
  };
  
  export default cartReducer;
