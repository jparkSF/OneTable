import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';

export default () => {
  return (
    <div>
      <header>
        <h1>OneTable</h1>
        <GreetingContainer />
      </header>
    </div>
  )
};


