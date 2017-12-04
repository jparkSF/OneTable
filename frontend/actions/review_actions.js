import * as RESTAURANT_API_UTIL from '../utils/reviews';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEWS';

export const receiveAllReviews = (reviews) => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews
});

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const requestAllReviews = () => dispatch => (
  RESTAURANT_API_UTIL.fetchAllReviews().then(restaurants => (
    dispatch(receiveAllReviews(restaurants))
  ))
);

export const createReview = review => dispatch => (
  RESTAURANT_API_UTIL.createReview(review).then(el => (
    dispatch(receiveReview(el))
  ))
);