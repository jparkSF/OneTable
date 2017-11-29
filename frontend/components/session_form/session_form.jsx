import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { login } from '../../utils/sessions';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    
    let loginState = { email: '', password: ''};
    let signUpState = {first_name: '', last_name:''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = 
      this.props.formType === "signup" ? 
        Object.assign(loginState,signUpState) : loginState;

    this.closeModal = props.closeModal;
    this.props.errors.session = [];
    this.renderErrors = this.renderErrors.bind(this);
    // this.clearErrors = this.clearErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  resetForm(){
    
    let loginState = { email: '', password: '' };
    let signUpState = { first_name: '', last_name: '' };
    let state =
      this.props.formType === "signup" ?
        Object.assign(loginState, signUpState) : loginState;
    this.setState(state);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user).then(() => this.closeModal());
  }

  demoUser(e) {
    const user = {
      email: "jpark830@me.com",
      password: "password"
    };
    this.props.demoUser(user).then(() => this.props.closeModal());
  }


  firstNameForm() {
    return(
      <input type="text" placeholder="Firstname *" value={this.state.first_name}
          onChange={this.update('first_name')} className="login-input"/> 
    );
  }
  lastNameForm() {
    return(
      <input type="text" placeholder="Lastname *" value={this.state.last_name}
          onChange={this.update('last_name')} className="login-input"/>
    );
  }
  emailForm(){
    return(
      <input type="text" placeholder="Email *" value={this.state.email}
          onChange={this.update('email')} className="login-input"/>
    );
  }
  passwordForm() {
    return(
      <input type="password" placeholder="Password *" value={this.state.password}
          onChange={this.update('password')} className="login-input"/>
    );
  }
  demoEmail() {
    return (
      <input type="text" placeholder="" value="jpark830@me.com"
        onChange={this.update('email')} className="login-input" />
    );
  }
  demoPassword() {
    return (
      <input type="password" placeholder="" value="password"
        onChange={this.update('password')} className="login-input" />
    );
  }

  mainForm() {
    const button = (this.props.formType === "login") ? 
      "Sign in " : "Create Account";

    switch (this.props.formType){
      case 'login':
        return(
          <div className="login-form">
            <br />
            {this.emailForm()}<br />
            {this.passwordForm()}<br /> 
            <input type="submit" value={button} />
            {/* <Link to='/demo'> */}
              <input type="button" onClick={() => this.demoUser()} value="TAKE A TOUR" />
            {/* </Link> */}
          </div>
        );  
    
      case 'signup':
        return(
          <div className="login-form">
            <br />
            {this.firstNameForm()}<br />
            {this.lastNameForm()}<br />
            {this.emailForm()}<br />
            {this.passwordForm()}<br />
            <input type="submit" value={button} />
            {/* <Link to='/demo'> */}
              <input type="button" onClick={() => this.demoUser()} value="TAKE A TOUR"/>
            {/* </Link> */}
          </div>
        );
      
        default:
          return (
            <div className="login-form">
              <br />
              {this.demoEmail()}<br />
              {this.demoPassword()}<br />
              <input type="button" onClick={() => this.demoUser()}  value="Demo sign in" />
              {/* <button onclick="{}"> Demo sign in</button>
              <input type="button"  value="Demo sign in" /> */}
            </div>
          );
        
    }
  }

  renderErrors() {
    const errors = this.props.errors.session;
     return (
      <ul className="error-lists">
        {this.props.errors.session.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  clearErrors() {
    this.props.errors.session = [];
  }

  navLink() {
    this.clearErrors();
    if (this.props.formType === 'login') {

      return <Link to="/signup" onClick={() => this.resetForm()}>Create an account</Link>;
    } else {
      return <Link to="/login" onClick={() => this.resetForm()}>Sign in</Link>;
    }
  }

  navLinkMsg() {
    const loginMsg = "New to OneTable? ";
    const signUpMsg = "Already have an account? ";
    if (this.props.formType === 'login') {
      return loginMsg;
    } else {
      return signUpMsg; 
    }
  }

  render() {
    const welcomeMsg = (this.props.formType === 'login') ?
      "Please sign in" : "Welcome to OneTable!";
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <p>{welcomeMsg}<a onClick={() => this.closeModal()}><i className="fa fa-times" aria-hidden="true"></i></a></p>
          <hr />
          { this.renderErrors() }      
          
          {this.mainForm()}

         
        </form>
        <hr />
        <div className="login-form-links">
          {this.navLinkMsg()}
          {this.navLink()}
        </div>
        
      </div>
    );
  }
}

export default withRouter(SessionForm);
