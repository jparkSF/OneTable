import { connect } from 'react-redux';
import { requestRestaurant } from '../../actions/restaurant_actions';
import RestaurantDetail from './restaurant_detail';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors.restaurant,
    restaurants: state.restaurants
  };
};

const mapDispatchToProps = dispatch => ({
  fetchRestaurant: restID => dispatch(requestRestaurant(restID))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantDetail));