import { connect } from 'react-redux';
import { requestAllRestaurants } from '../../actions/restaurant_actions';
import RestaurantIndex from './restaurant_index';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ restaurants, session, errors }) => {
  return {
    currentUser: session.currentUser,
    errors: errors.restaurant,
    restaurants: restaurants
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllRestaurants: restaurant => dispatch(requestAllRestaurants(restaurant))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantIndex));