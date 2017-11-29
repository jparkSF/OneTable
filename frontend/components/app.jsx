import React from 'react';
import { Link, Switch } from 'react-router-dom';
import Logo from './greeting/logo_container';
import Main from './main';


const App = () => {
  return (
    <div className="main"> 
      <div className="main-head">
        <Logo />
      </div>
      <Main />
    </div>
  );
};

export default App;
