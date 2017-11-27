import * as RESTAURANT_API_UTIL from '../utils/restaurants';

export const RECEIVE_ALL_RESTAURANTS = 'RECEIVE_ALL_RESTAURANTS';
export const RECEIVE_ALL_RESTAURANT = 'RECEIVE_ALL_RESTAURANT';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';

export const receiveAllRestaurants = (restaurants) => ({
  type: RECEIVE_ALL_RESTAURANTS,
  restaurants
});

export const receiveRestaurant = restaurant => ({
  type: RECEIVE_RESTAURANT,
  restaurant
});


export const receiveErrors = errors => ({
  type: RECEIVE_RESTAURANT,
  errors
});

export const requestAllRestaurants = () => dispatch => (
  RESTAURANT_API_UTIL.fetchAllRestaurants().then(restaurants => (
    dispatch(receiveAllRestaurants(restaurants))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const createRestaurant = restaurant => dispatch => (
  RESTAURANT_API_UTIL.createRestaurant(restaurant)
    .then(newRestaurant => (dispatch(receiveRestaurant(newRestaurant))),
    err => (dispatch(receiveErrors(err.responseJSON))))
);


export const editRestaurant = restaurant => dispatch => (
  RESTAURANT_API_UTIL.updateRestaurant(restaurant)
    .then(newRestaurant => (dispatch(receiveRestaurant(newRestaurant))),
    err => (dispatch(receiveErrors(err.responseJSON))))
);