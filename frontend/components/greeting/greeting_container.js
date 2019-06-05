import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import Greeting from "./greeting";
import { withRouter } from "react-router-dom";
import { login } from "../../actions/session_actions";
const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    buttonPath: ownProps.history.location.pathname
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  demoUser: user => dispatch(login(user))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Greeting)
);
