import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from '../thunk/thunk';

import rootReducer from '../reducers/rootReducer';

const configureStore = (preloadedState = {}) => (

  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger) //add logger if you want to see logs in console
  )
);

export default configureStore;