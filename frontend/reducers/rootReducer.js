import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import restaurants from './restaurant_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  restaurants
});

export default RootReducer;
