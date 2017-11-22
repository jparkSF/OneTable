import React from 'react';
import { Link } from 'react-router-dom';



const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/signup" className="signup">Sign up</Link>
    <Link to="/login" className="login">Sign in</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.first_name}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
  </hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
