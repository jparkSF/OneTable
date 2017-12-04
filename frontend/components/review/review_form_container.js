import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewForm from './review_form';
import {requestRestaurant, requestAllRestaurants} from '../../actions/restaurant_actions';
import { createReview } from '../../actions/review_actions';
import { fetchAllRestaurants, fetchRestaurant } from '../../utils/restaurants';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  errors: state.errors.restaurant,
  restaurants: state.restaurants
});

const mapDispatchToProps = (dispatch) => {
  
  return {
    createReview: review => dispatch(createReview(review)),
    fetchAllRestaurants: () => dispatch(requestAllRestaurants()),
    fetchRestaurant: (restId) => dispatch(requestRestaurant(restId))
    
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm));
