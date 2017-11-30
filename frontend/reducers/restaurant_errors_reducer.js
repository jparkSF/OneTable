import merge from 'lodash/merge';
import {
  RECEIVE_RESTAURANT_ERRORS
} from '../actions/restaurant_actions';



export default (state = [], action) => {
  Object.freeze(state);
  
  switch (action.type) {
    
    case RECEIVE_RESTAURANT_ERRORS: 
      return action.errors;
  
    default:
      return state;
  }
};
