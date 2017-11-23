import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    
    let loginState = { email: '', password: ''};
    let signUpState = {first_name: '', last_name:''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = 
      this.props.formType === "signup" ? 
        Object.assign(loginState,signUpState) : loginState

    this.closeModal = props.closeModal;
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

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user).then(() => this.props.closeModal());
  }


  firstNameForm() {
    return(
        <input type="text" placeholder="Firstname *"value={this.state.first_name}
          onChange={this.update('first_name')} className="login-input"/> 
    )
  }
  lastNameForm() {
    return(
        <input type="text" placeholder="Lastname *" value={this.state.last_name}
          onChange={this.update('last_name')} className="login-input"/>
    )
  }
  emailForm(){
    return(
        <input type="text" placeholder="Email *" value={this.state.email}
          onChange={this.update('email')} className="login-input"/>
    )
  }
  passwordForm() {
    return(
        <input type="password" placeholder="Password *" value={this.state.password}
          onChange={this.update('password')} className="login-input"/>
    )
  }

  mainForm() {
    const button = (this.props.formType === "login") ? 
      "Sign in " : "Create Account";

    if (this.props.formType === "login"){
      return(
        <div className="login-form">
          <br />
          {this.emailForm()}<br />
          {this.passwordForm()}<br /> 
          <input type="submit" value={button} />
        </div>
      )      
    } else {
      return(
        <div className="login-form">
          <br />
          {this.firstNameForm()}<br />
          {this.lastNameForm()}<br />
          {this.emailForm()}<br />
          {this.passwordForm()}<br />
          <input type="submit" value={button} />
        </div>
      )
    }
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.session.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  navLink() {
    if (this.props.formType === 'login') {
    return <Link to="/signup">Create an account</Link>;
    } else {
      return <Link to="/login">Sign in</Link>;
    }
  }

  navLinkMsg() {
    const loginMsg = "New to OneTable? ";
    const signUpMsg = "Already have an account? "
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
          <p>{welcomeMsg}</p>
          <hr />
          {this.renderErrors()}      
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
