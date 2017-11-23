import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = (state, ownProps) => {
  const pathname = ownProps.location.pathname.length > 1 ? 
    ownProps.location.pathname.slice(1) : 
    ownProps.location.pathname
  return ({
    currentUser: state.session.currentUser,
    currentPath: pathname
  })
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
