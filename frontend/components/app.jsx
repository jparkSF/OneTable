import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import MainContentContainer from './main_content/main_content_container';
import { Link, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';

const App = () => (
  <div className="main">
    <div className="main-head">
      <header>
        <Link to="/" className="header-link">
          <h1>Logo + OneTable</h1>
        </Link>       
        <GreetingContainer /> 
      </header>
      <div className="main-bg"></div>
    </div>
    <div className="main-side">
      <div className="side-map">
        <div id="map"></div>
      </div>
    </div>
    <div className="main-body">
      <div className="main-contents">
        <MainContentContainer />
      </div>
    </div>
   

  </div>
);

export default App;
