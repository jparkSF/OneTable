import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = (state,ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const altType = (formType === 'login') ? 'signup': 'login'
  console.log(formType)
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors,
    formType,
    altType
  }
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
