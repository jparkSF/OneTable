import React from "react";
import Modal from "react-modal";
import customStyles from "../../utils/modal_style";
import SessionFormContainer from "../session_form/session_form_container";
import { AuthRoute, ProtectedRoute } from "../../utils/route_util";
import { Route, Switch, Link, HashRoute } from "react-router-dom";

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      buttonPath: ""
    };
    this.formType = this.props.history.location.pathname;
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    // $(".dropdown-content")
    //   .css("opacity", 0)
    //   .removeClass("show");
    // $('.dropdown-content').css('z-index','-1');

    const user = {
      email: "jpark830@me.com",
      password: "password"
    };
    this.props.demoUser(user);
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

  afterOpenModal() {}

  sessionLinks() {
    return (
      <nav className="login-signup">
        <Link
          to="/signup"
          onClick={() => {
            this.openModal("/signup");
          }}
          className="signup"
        >
          Sign up
        </Link>
        <Link
          to="/login"
          onClick={() => {
            this.openModal("/login");
          }}
          className="login"
        >
          Sign in
        </Link>
      </nav>
    );
  }

  handleLogOut() {
    this.props.logout();
    this.props.history.push("/");
  }

  personalGreeting(currentUser, logout) {
    return (
      <hgroup className="header-group">
        <div className="dropdown">
          <button
            className="header-name drop-button"
            onClick={() => this.sessionMenuToggle()}
          >
            Hi, {currentUser.first_name}
            <i className="fa fa-angle-down" aria-hidden="true" />
          </button>
          <div id="dropdown-menu" className="dropdown-content show">
            <div className="dropdown-items">
              <a className="header-button" href="/#/user/:id">
                My Profile
              </a>
              <a className="header-button" href="/#restaurant/new">
                Create Restaurant
              </a>
              <a className="header-button" href="/#/favorites/">
                Your Favorites
              </a>
              <button
                className="header-button"
                onClick={() => this.handleLogOut()}
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </hgroup>
    );
  }

  greeting({ currentUser, logout }) {
    return currentUser
      ? this.personalGreeting(currentUser, logout)
      : this.sessionLinks();
  }

  sessionMenuToggle() {
    if ($(".show").css("opacity") == 0) {
      // $('.show').css('opacity', 1);
      $(".show")
        .css("z-index", 1)
        .css("opacity", 1);
    } else {
      // $('.show').css('opacity', 0).removeClass('.show');
      $(".show")
        .css("z-index", "-1")
        .css("opacity", 0);
    }

    window.onclick = function(event) {
      if (!event.target.matches(".drop-button")) {
        // $('.show').css('opacity', 0);
        $(".show")
          .css("z-index", "-1")
          .css("opacity", 0);
      }
    };
  }

  render() {
    return (
      <div className="header-sessions">
        {this.greeting(this.props)}
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <SessionFormContainer
            closeModal={this.closeModal}
            buttonPath={this.state.buttonPath}
          />
        </Modal>
      </div>
    );
  }
}

export default Greeting;
