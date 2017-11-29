import { connect } from 'react-redux';
import Logo from './logo';

import { withRouter } from 'react-router-dom';
import { 
  requestAllRestaurants 
} from '../../actions/main_content_actions';

const mapStateToProps = (state) => {

  return ({
    currentUser: state.session.currentUser,
    restaurants: state.restaurants
    

  });
};

const mapDispatchToProps = dispatch => ({
  fetchAllRestaurants: () => dispatch(requestAllRestaurants())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Logo));
