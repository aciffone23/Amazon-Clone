import csrfFetch from './csrf';

const RECEIVE_PRODUCTS = 'product/receive_products';
const RECEIVE_PRODUCT = 'product/receive_product';


const receiveProducts = products => {
    return {
        type: RECEIVE_PRODUCTS,
        products
    }
}
const receiveProduct = product => {
    return {
        type: RECEIVE_PRODUCT,
        product
    }
}

export const getProducts = (state) => {
    if (state.products) {
        return Object.values(state.products)
    } else {
        return []
    }
}
export const getProduct = (productId) => {
    return (state) => {
        if (state.products) {
            return state.products[productId]
        } else {
            return null
        }
    }
}

export const fetchProducts = (category) => async (dispatch) => {
    const url = category ? `/api/products?category=${category}` : '/api/products';
    const response = await csrfFetch(url);
    if (response.ok) {
      const data = await response.json();
      dispatch(receiveProducts(data));
    }
  };
  
export const fetchProduct = (productId) => async dispatch => {
    const response = await csrfFetch(`/api/products/${productId}`)
    if (response.ok) {
        const data = await response.json()
        dispatch(receiveProduct(data))
    }
}

const productReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = {...state}
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return {...newState, ...action.products}
        case RECEIVE_PRODUCT:
            newState[action.product.id] = action.product
            return newState
        default:
            return state
    }
}

export default productReducer