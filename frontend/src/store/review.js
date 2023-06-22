import csrfFetch from "./csrf";
import { fetchProduct } from "./product";


export const RECEIVE_REVIEWS = "review/RECEIVE_REVIEWS"
export const RECEIVE_REVIEW = "review/RECEIVE_REVIEW"
export const RECEIVE_UPDATED_REVIEW = "review/RECEIVE_UPDATED_REVIEW"
export const REMOVE_REVIEW = "review/REMOVE_REVIEW"

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

export const receiveUpdatedReview = (productId, review) => ({
    type: RECEIVE_UPDATED_REVIEW,
    productId,
    review,
});

const removeReview = (productId, reviewId) => ({
    type: REMOVE_REVIEW,
    productId,
    reviewId,
});


export const fetchReviews = (productId) => async (dispatch) => {
    const response = await csrfFetch('api/reviews')
    if (response.ok) {
        const { reviews, users } = await response.json()
        dispatch(receiveReviews(productId, { reviews, users }))
    }
}

export const createReview = (reviewData) => async (dispatch) => {
    const response = await csrfFetch('/api/reviews', {
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

export const updateReview = (productId, reviewData) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${reviewData.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewData),
    });
  
    if (response.ok) {
      const updatedReview = await response.json();
      dispatch(receiveUpdatedReview(productId, updatedReview));
      dispatch(fetchProduct(productId));
    } else {
      const errorData = await response.json();
      if (errorData.errors) {
        // Handle validation errors
        console.log(errorData.errors);
        // You can dispatch an action to store the validation errors in the Redux store
        // dispatch(setReviewErrors(errorData.errors));
      } else {
        // Handle other errors
        console.log('An error occurred:', errorData);
      }
    }
  };
  

export const deleteReview = (productId, reviewId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        // Dispatch an action to remove the review from the state
        dispatch(removeReview(productId, reviewId));
        dispatch(fetchProduct(productId));
    }
};
  

const reviewsReducer = (state = {} , action) => {
    switch (action.type) {
        case RECEIVE_REVIEWS:
            return {
                ...state,
                [action.productId]: action.reviews,
              };
        // case RECEIVE_REVIEW:
        //     return {
        //         ...state,
        //         [action.productId]: [...state[action.productId], action.review],
        //       };
            //   case RECEIVE_UPDATED_REVIEW:
            //     return {
            //         ...state,
            //         [action.productId]: state[action.productId].map((review) =>
            //           review.id === action.review.id ? action.review : review
            //         ),
            //       }; 
           
        default:
            return state;
    }
}

export default reviewsReducer;