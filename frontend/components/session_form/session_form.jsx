import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props)
    let loginState = { email: '', password: ''};
    let signUpState = {first_name: '', last_name:''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = 
      this.props.formType === "signup" ? 
        Object.assign(loginState,signUpState) : loginState
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
    this.props.processForm( user );
  }


  firstNameForm() {
    return(
      <label>Firstname:
        <input type="text"
          value={this.state.first_name}
          onChange={this.update('first_name')}
          className="login-input"
        />
      </label>
    )
  }
  lastNameForm() {
    return(
      <label>Lastname:
        <input type="text"
          value={this.state.last_name}
          onChange={this.update('last_name')}
          className="login-input"
        />
      </label>
    )
  }
  
  emailForm(){
    return(
      <label>email:
        <input type="text"
          value={this.state.email}
          onChange={this.update('email')}
          className="login-input"
        />
      </label>
    )
  }

  passwordForm() {
    return(
      <label>Password:
        <input type="password"
          value={this.state.password}
          onChange={this.update('password')}
          className="login-input"
        />
      </label>
    )
  }

  mainForm() {
  
    if (this.props.formType === "login"){
      return(
        <div className="login-form">
          <br />
          {this.emailForm()}
          <br />
          {this.passwordForm()}
          <br /> 
          <input type="submit" value="Submit" />
        </div>
      )      
    } else {
      return(
        <div className="login-form">
          <br />
          {this.firstNameForm()}
          <br />
          {this.lastNameForm()}
          <br />
          {this.emailForm()}
          <br />
          {this.passwordForm()}
          <br />
          <input type="submit" value="Submit" />
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

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to OneTable
          <br />
          {this.renderErrors()}      
          {this.mainForm()}
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
