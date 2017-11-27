import React from 'react';
import { Link, Switch } from 'react-router-dom';
import GreetingContainer from './greeting_container';

class Logo extends React.Component{
  
  render() {
    return(
      <header>
        <div className="header-left">
          <Link to="/" className="header-link">
            <div className="logo"></div>
          </Link>
          
            <i className="fa fa-map-marker fa-lg header-location" aria-hidden="true"></i>
            <input type="text" className="header-search" placeholder="Find a restaurant" />
          
        </div>
        <GreetingContainer />
      </header >
    );
  }
}

export default Logo;