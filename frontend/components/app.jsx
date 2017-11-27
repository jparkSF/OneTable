import React from 'react';
import MainContentContainer from './main_content/main_content_container';
import { Link, Switch } from 'react-router-dom';
import Logo from './greeting/logo';

const App = () => (
  <div className="main">
    <div className="main-head">
      <Logo />
      <div className="main-bg"></div>
    </div>
    
    <div className="main-body">
      <div className="main-contents">
        <MainContentContainer />
      </div>
      <div className="main-contents">
        <MainContentContainer />
      </div>
      <div className="main-contents">
        <MainContentContainer />
      </div>
    </div>
    
    <div className="main-side">
      <div className="side-map">
        <div id="map"></div>
      </div>
    </div>
  </div>
);

export default App;
