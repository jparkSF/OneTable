import React from 'react';
import { Route } from 'react-router-dom';


import {signup, login, logout} from '../utils/sessions';


export default () => {
  window.signup = signup
  window.login = login
  window.logout = logout
  return (
    <div>
      app.jsx 
    </div>
  )

};


