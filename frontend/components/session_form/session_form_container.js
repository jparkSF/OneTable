import { connect } from 'react-redux';
import { login, logout, signup, receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state,ownProps) => {
  const formType = ownProps.history.location.pathname.slice(1);

  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors,
    formType
  }
};

const mapDispatchToProps = (dispatch, { history }) => { 
  const formType = history.location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    receiveErrors: (errors) => dispatch(receiveErrors(errors)),
    demoUser: user => dispatch(login(user))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));
