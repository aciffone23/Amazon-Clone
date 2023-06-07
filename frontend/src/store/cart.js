import csrfFetch from "./csrf";

export const RECEIVE_CART_ITEM = 'cart/RECEIVE_CART_ITEM';
export const RECEIVE_CART_ITEMS = 'cart/RECEIVE_CART_ITEMS';
export const REMOVE_CART_ITEM = 'cart/REMOVE_CART_ITEM';
export const REMOVE_CART_ITEMS = 'cart/REMOVE_CART_ITEMS';
export const UPDATE_CART_ITEM = 'cart/UPDATE_CART_ITEM';


export const receiveCartItem = (productId, quantity) => ({
    type: RECEIVE_CART_ITEM,
    payload: {productId, quantity}
  });

export const updateCartItem = (productId, quantity) => ({
    type: UPDATE_CART_ITEM,
    payload: {productId, quantity}
  });
  
export const removeCartItem = (productId) => ({
    type: REMOVE_CART_ITEM,
    productId
});

export const removeCartItems = (payload) => ({
    type: REMOVE_CART_ITEM,
    payload: payload
});

export const receiveCartItems = (cartItems) => ({
  type: RECEIVE_CART_ITEMS, 
  payload: cartItems
})

export const fetchCart = () => async (dispatch) => {
    const response = await csrfFetch('/api/cart');
    const data = await response.json();
      dispatch(receiveCartItems(data));
};

export const addCartItem = (userId, productId, quantity) => async (dispatch) => {
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
    } 
};

export const updateCart = (userId, productId, quantity) => async (dispatch) => {
  const response = await csrfFetch(`/api/cart`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId, productId, quantity }),
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(updateCartItem(data.productId, data.quantity));
  }
};

export const removeFromCart = (userId, productId) => async (dispatch) => {
    const response = await csrfFetch('/api/cart', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, productId }),

    });
    if (response.ok) {
      dispatch(removeCartItem(productId));
    } 
};
export const clearCart = (userId) => async (dispatch) => {
    const response = await csrfFetch('/api/cart', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId }),

    });
    if (response.ok) {
      dispatch(removeCartItems());
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
          cartItems: state.cartItems.filter((item) => item.product && item.product.id !== action.productId),
        };
      case REMOVE_CART_ITEMS:
        return {
          ...state,
          cartItems: [],
        }
      case RECEIVE_CART_ITEMS:
        return {
          ...state,
          cartItems: action.payload,
        }
      case UPDATE_CART_ITEM:
        return {
          ...state,
          cartItems: state.cartItems.map((item) => {
            if (item.id === action.payload.productId) {
              return {
                ...item,
                quantity: action.payload.quantity,
              };
            }
            return item;
          }),
        };  
      default:
        return state;
    }
  };
  
  export default cartReducer;
