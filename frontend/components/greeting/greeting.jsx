import React from 'react';
import Modal from 'react-modal';
import customStyles from '../../utils/modal_style';
import SessionFormContainer from '../session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../../utils/route_util';
import {
  Route,
  Switch,
  Link,
  HashRoute
} from 'react-router-dom';

class Greeting extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false,
      buttonPath: ''
    };
    this.formType = this.props.history.location.pathname
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    
  }

  openModal(buttonType) {
    
    this.setState({ 
      modalIsOpen: true,
      buttonPath: buttonType
    });

  
  }

  
  closeModal() {
    // this.props.history.push('/');
    this.setState({ modalIsOpen: false });
  }

  afterOpenModal() {
  }

 
  sessionLinks() {
    return (
      <nav className="login-signup">
        <Link to='/signup' onClick={() => {this.openModal('/signup')}} className="signup">Sign up</Link>
        <Link to='/login' onClick={() => {this.openModal('/login')}} className="login">Sign in</Link>
      </nav>
    )
  }
  
  personalGreeting(currentUser, logout) {
    return(
      <hgroup className="header-group">
        <h2 className="header-name">HI, {currentUser.first_name}</h2>
        <button className="header-button" onClick={logout}>Log Out</button>
      </hgroup>
    )
  }

  greeting({ currentUser, logout }) {
    return currentUser ? this.personalGreeting(currentUser, logout) : this.sessionLinks()
  }

  render() {

    return (
      <div className="header-sessions">
        {this.greeting(this.props)}
        <Modal
          isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal} style={customStyles}  
        >
          <SessionFormContainer closeModal={this.closeModal} buttonPath={this.state.buttonPath}/>
        </Modal>
      </div>
    )
  }
}

export default Greeting;
