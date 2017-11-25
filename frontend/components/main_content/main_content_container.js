import { connect } from 'react-redux';
import { 
  fetchAllRestaurants,
  fetchRestaurant,
  receiveAllRestaurants,
  requestAllRestaurants
} from '../../actions/main_content_actions';
import MainContent from './main_content';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state) => ({
  restaurants: state.restaurants
  
});

const mapDispatchToProps = dispatch => ({
  fetchAllRestaurants: () => dispatch(requestAllRestaurants())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContent));
