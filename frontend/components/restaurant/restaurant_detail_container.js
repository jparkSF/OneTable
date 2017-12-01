import { connect } from 'react-redux';
import { requestRestaurant, requestAllRestaurants } from '../../actions/restaurant_actions';
import { getUserInfo } from '../../actions/session_actions';
import RestaurantDetail from './restaurant_detail';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors.restaurant,
    favoriteRestaurants: state.session.currentUser.favorite_restaurants,
    restaurants: state.restaurants
  };
};

const mapDispatchToProps = dispatch => ({
  fetchRestaurant: restID => dispatch(requestRestaurant(restID)),
  fetchAllRestaurants: () => dispatch(requestAllRestaurants()),
  fetchCurrentUser: (userId) => dispatch(getUserInfo(userId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantDetail));