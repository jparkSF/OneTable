import merge from 'lodash/merge';

import {
  RECEIVE_ALL_RESTAURANTS,
  RECEIVE_ALL_RESTAURANT,
  RECEIVE_RESTAURANT
} from '../actions/main_content_actions';



const RestaurantReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_RESTAURANTS:
      return action.restaurants;
    
    case RECEIVE_RESTAURANT:
    
      const newState = { [action.restaurant.id]: action.restaurant };
      return merge({}, state, newState);

    default:
      return state;
  }
};

export default RestaurantReducer;
