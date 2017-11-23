import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { Link } from 'react-router-dom';

const App = () => (
  <div className="main">
    <header>
      <Link to="/" className="header-link">
        <h1>Logo + OneTable</h1>
      </Link>       
      <GreetingContainer />
    </header>
    <div className="main-bg"></div>
  </div>
)

export default App;
