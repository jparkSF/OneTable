import merge from 'lodash/merge';
import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
} from '../actions/session_actions';



export default (state = [], action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      
      return action.errors;
    
      case RECEIVE_CURRENT_USER:
      

      return state;
    default:
      return state;
  }
};
