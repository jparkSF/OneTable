import React from 'react';
import ReactDOM from 'react-dom';
// import createStore from './store/store';
// import Root from './components/root';

import {createUser, fetchUser} from './utils/api_util'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let preloadedState = undefined;
  window.createUser = createUser
  window.fetchUser = fetchUser

  console.log("hello world")
  ReactDOM.render(<h2>React View</h2>, root);
})