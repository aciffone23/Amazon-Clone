import csrfFetch from "./csrf";


export const RECEIVE_REVIEWS = "review/RECEIVE_REVIEWS"
export const RECEIVE_REVIEW = "review/RECEIVE_REVIEW"

export const receiveReviews = (productId, reviews) => ({
    type: RECEIVE_REVIEWS, 
    productId,
    reviews,
});

export const receiveReview = (productId, review) => ({
    type: RECEIVE_REVIEW, 
    productId,
    review,
});

export const fetchReviews = (productId) => async (dispatch) => {
    const response = await csrfFetch('api/reviews')
    if (response.ok) {
        const {reviews, users} = await response.json()
        dispatch(receiveReviews(productId, {reviews, users}))
    }
}

export const createReview = (reviewData) => async (dispatch) => {
    const response = await csrfFetch('api/reviews', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reviewData)
    });
    if (response.ok) {
        const review = await response.json();
        dispatch(receiveReview(review))
    }
}

const reviewsReducer = (state = {} , action) => {
    switch (action.type) {
        case RECEIVE_REVIEWS:
            return {
                ...state,
                [action.productId]: action.reviews,
              };
        case RECEIVE_REVIEW:
            return {
                ...state,
                [action.productId]: [...state[action.productId], action.review],
              };
        default:
            return state;
    }
}

export default reviewsReducer;