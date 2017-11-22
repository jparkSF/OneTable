import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import {
  Route,
  Switch,
  Link,
  HashRoute
} from 'react-router-dom';

export default () => {
  return (
    <div>
      <header>
        <Link to="/" className="header-link">
          <h1>OneTable</h1>
        </Link>       
        <GreetingContainer />
      </header>
      <Switch>      
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
      </Switch>
    </div>
  )
};


