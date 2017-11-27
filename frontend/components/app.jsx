import React from 'react';
import MainContentContainer from './main_content/main_content_container';
import { Link, Switch } from 'react-router-dom';
import Logo from './greeting/logo';
import Main from './main';
import Map from './main_content/map';

const App = () => {

  return(
    <div className="main">
      <div className="main-head">
        <Logo />
        <div className="main-bg"></div>
      </div>

      <Main />

      
      <Map />
    
    
    </div>
  );
};

export default App;
