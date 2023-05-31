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
        payload: product
    }
}

export const fetchProducts = () => async dispatch => {
    const response = await csrfFetch("/api/products") 
    if (response.ok) {
        const data = await response.json()
        dispatch(receiveProducts(data))
    }
}
export const fetchProduct = (productId) => async dispatch => {
    const response = await csrfFetch(`/api/products/${productId}`)
    if (response.ok) {
        const data = await response.json()
        dispatch(receiveProduct(data))
    }
}

const productReducer = (state = {}, action) => {
    let newState = {...state}
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return {...state, ...action.products}
        case RECEIVE_PRODUCT:
            newState[action.payload.product.id] = action.payload.product
            return newState
        default:
            return state
    }
}

export default productReducer