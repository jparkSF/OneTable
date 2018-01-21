import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import uniqueId from '../../utils/id_gen';
import SearchTool from './search_tool';
import IndexSideBar from './restaurant_index_sidebar';
import RestaurantReservation from './restaurant_reservation';
import RestaurantMap from './restaurant_map';
import isEmpty from 'lodash/isEmpty';
import { createFavorite, deleteFavorite } from '../../utils/favorites';
import ReviewFormContainer from '../review/review_form_container';

export default class RestaurantDetail extends React.Component {
  constructor(props) {
    super(props);
    this.handleFavorite = this.handleFavorite.bind(this);
    this.state = {
      favorite: false
    };

    this.currentUser = props.currentUser;
    this.fetchRestaurant = props.fetchRestaurant;
    this.fetchAllRestaurants = props.fetchAllRestaurants;
    this.restId = props.match.params.restID;
    this.fetchCurrentUser = props.fetchCurrentUser;

    
  }

  componentDidMount(){
    this.fetchCurrentUser(this.currentUser.id);
  }
  componentWillMount() {
    
    this.fetchAllRestaurants();
    $('.header-search-wrapper').addClass('hidden');

    this.checkCurrentFavState(); 
  }



handleFavorite() {
  // this.setState({
  //   favorite: !this.state.favorite
  // });
  const data = {
    favorite: {
      user_id: this.currentUser.id,
      customer_id: this.currentUser.id,
      restaurant_id: parseInt(this.restId)
    }
  };

  let currentRestaurantObj = this.props.restaurants[this.restId];
  if (!this.state.favorite) {
    
    createFavorite(data);
    
    $('.restaurant-detail-favorite').addClass('favorite-active');
    $('.favorite-wording').text('Favorited');
    $('.favorite-icon').removeClass('fa-heart');
    $('.favorite-icon').removeClass('fa-heart-o').addClass('fa-heart');
    
    this.setState({ favorite: true }, () => this.fetchCurrentUser(this.currentUser.id));
  } else {

    deleteFavorite(data);
    
    this.setState({ favorite: false });
    $('.restaurant-detail-favorite').removeClass('favorite-active');
    $('.favorite-wording').text('Add to Favorite');
    $('.favorite-icon').addClass('fa-heart-o').removeClass('fa-heart');
    
    this.setState({ favorite: false }, () => this.fetchCurrentUser(this.currentUser.id));
  }
  
  
  
  
  
  
  
}
checkCurrentFavState(){
  if (this.currentUser) {

  let favoriteRestaurants = this.props.currentUser.favorite_restaurants;
  const favRest = favoriteRestaurants.filter(rest => rest.id);
  const favRestIds = [];
  favRest.forEach(rest => favRestIds.push(rest.id));

  if (favRestIds.includes(parseInt(this.restId))) {
    $('.restaurant-detail-favorite').addClass('favorite-active');
    $('.favorite-wording').text('Favorited');
    $('.favorite-icon').removeClass('fa-heart');
    $('.favorite-icon').removeClass('fa-heart-o').addClass('fa-heart');
    this.setState({ favorite: !this.state.favorite });
  }
}
}
deactiveFav(){
  return(
  <div className="restaurant-detail-favorite">

    <i className="fa fa-heart-o favorite-icon" id="empty-heart" aria-hidden="true"></i>
    <span className="favorite-wording">Add to Favorite</span>

  </div>
  );
}

  renderStars(averRating) {
    let target = $('#list-item-rating-star');
    let domArray = [];
    if (averRating > 0 ){
      for (let i = 0; i < averRating; i++) {
        domArray.push(<i className='fa fa-star' key={i} aria-hidden='true'></i>);
      }
    } else {
      for (let i = 0; i < 5; i++) {
        domArray.push(<i className="fa fa-star-o" key={i} aria-hidden="true"></i>);
      }
    }
    

    return domArray;
  }

activeFav(){
  return(
    <div className="restaurant-detail-favorite favorite-active">

    <i className="fa fa-heart favorite-icon" id="empty-heart" aria-hidden="true"></i>
    <span className="favorite-wording">Favorited</span>

  </div>
  );
}
getRandomNumber(n){
  return Math.floor(Math.random() * Math.floor(n-1)) + 1;
}

getPhotos(){
  const n = 40;
  return(
    <div className="restaurant-photos-inner">
      <img src={`http://res.cloudinary.com/jpark830/image/upload/v1515623333/onetable/restaurants/photos/${this.getRandomNumber(n)}.jpg`} />
      <img src={`http://res.cloudinary.com/jpark830/image/upload/v1515623333/onetable/restaurants/photos/${this.getRandomNumber(n)}.jpg`} />
      <img src={`http://res.cloudinary.com/jpark830/image/upload/v1515623333/onetable/restaurants/photos/${this.getRandomNumber(n)}.jpg`} />
      <img src={`http://res.cloudinary.com/jpark830/image/upload/v1515623333/onetable/restaurants/photos/${this.getRandomNumber(n)}.jpg`} />
    </div>
  )

}

destructRestaurant(restaurant) {
  const reducer = (acc, currentValue) => acc + currentValue;
  let keys = Object.keys(restaurant.reviews);
  let ratings = [];
  let averRating;

  if (isEmpty(keys)) {
    averRating = 0;
  } else {
    keys.forEach(key => ratings.push(restaurant.reviews[key].rating));
    let totalRate = ratings.reduce(reducer);
    averRating = Math.round(totalRate / ratings.length);
  }

  if (this.restaurant === undefined) {
    return (<div></div>);
  } else {

    return (
      <div>
        <div className="list-item-thumb" ></div>
        <div className="list-item-info">
         
          <p className="detail-restaurant-name">{this.restaurant.name}</p>
          <p>
            {this.renderStars(averRating)}
          </p>
          <div className="detail-item-favorite">
            <p className="restaurant-cuisine">American</p>
            {/* {this.activeFav()} */}
            <a onClick={this.handleFavorite} className="favorite-toggle">
              {
                
                this.state.favorite ? this.activeFav() : this.deactiveFav()
              }
             
            </a>
          </div>

        </div>
      </div>
    );
  }
}

render() {


  // this.fetchCurrentUser(this.currentUser.id);
  
  
  const stateEmpty = isEmpty(this.props.restaurants);
  if (stateEmpty) {
    return (<div></div>);
  } else {
    this.restaurant = this.props.restaurants[this.restId];
    let fixedImageUrl = this.restaurant.image_url;
  
    if (this.restaurant.image_url.includes('://s3.')) {
      fixedImageUrl = this.restaurant.image_url.replace('://s3.', 's://s3-us-west-1.');
    }

    // if (this.restaurant.image_url.includes('/one-table.')) {
    //   fixedImageUrl = this.restaurant.image_url.replace('/one-table.', '/');
    // }
   let style = {
     backgroundImage: "url(" + fixedImageUrl + ")",
    //  opacity: "0"
   };

    return (
      <div className="detail-main">
        <div className="detail-header" style={style}>  
          <div className="detail-header-wrapper">
            <div className="detail-header-image-thumb">
              <img src={fixedImageUrl} alt="" />
            </div>
            <div className="detail-header-rest-info">
              {this.destructRestaurant(this.restaurant)}
            </div>
          </div>
        </div>
        <div className="detail-body">
          <div className="detail-body-side">
            <div className="body-side-wrapper">
              <Link to={`/restaurant/${this.restId}/#reservations`}>Reservations</Link><br/>
              <Link to={`/restaurant/${this.restId}/#about`}>About</Link><br />
              <Link to={`/restaurant/${this.restId}/#reviews`}>Reviews</Link><br />
              <Link to={`/restaurant/${this.restId}/#photos`}>Photos</Link><br />
            </div>
          </div>

          <div className="detail-body-main">

            <div className="detail-body-main-left">

              <div id="reservation" className="body-main-left-inner-wrapper">
                <h1 className="body-main-left-title">
                  Make a reservation
                </h1>
                <RestaurantReservation />
              </div>
              <div id="about" className="body-main-left-inner-wrapper">
                <h1 className="body-main-left-title">
                  About {this.restaurant.name}
                </h1>










                <hr />
                
                  <div className="restaurant-map">
                    <RestaurantMap position={
                      {
                        restaurantLat: this.restaurant.lat,        
                        restaurantLng: this.restaurant.lng
                      }
                    }/>
                  </div>
                
            

              </div>
              <div id="rating" className="body-main-left-inner-wrapper">
                <h1 className="body-main-left-title">
                  Leave a Feedback
                  </h1>
                <hr />
                    
                <ReviewFormContainer props={this.props}/>
                
              </div>
              <div id="photo" name="photo" className="body-main-left-inner-wrapper">
                <h1 className="body-main-left-title">
                  Restaurant Photos
                  </h1>
                <hr />
                <div className="restaurant-photos">
                  {this.getPhotos()}

                </div>
                

              </div>

            </div>
            <div className="detail-body-main-right">
              <div className="body-main-left-inner-wrapper main-right-inner-wrapper">
                <div className="sidebar-details">
                  <ul>
                    <li className="sidebar-detail-content">
                      <div className="bell icons"></div>
                      <div className="sidebar-detail-title">
                        
                        Dining Style:
                        </div>
                      <div className="sidebar-detail-value">
                        Fine Dining
                        </div>
                    </li>
                    <li className="sidebar-detail-content">
                      <div className="time icons"></div>
                      <div className="sidebar-detail-title">
                        Hours of Operation:
                        </div>
                      <div className="sidebar-detail-value">
                        Open {this.restaurant.opening.slice(0, 5)} to {this.restaurant.closing.slice(0, 5)} daily
                        </div>
                    </li>
                    <li className="sidebar-detail-content">
                      <div className="phone icons"></div>
                      <div className="sidebar-detail-title">
                        
                        Phone Number:
                        </div>
                      <div className="sidebar-detail-value">
                        {this.restaurant.phone.slice(0, 3)}-
                          {this.restaurant.phone.slice(3, 6)}-
                          {this.restaurant.phone.slice(6, 10)}
                      </div>
                    </li>
                    <li className="sidebar-detail-content">
                      <div className="cuisine icons">
                        <i className="fa fa-cutlery cutlery" aria-hidden="true"></i>
                      </div>
                      <div className="sidebar-detail-title">
                        
                        Cuisine:
                        </div>
                      <div className="sidebar-detail-value">
                        American, California
                        </div>
                    </li>
                    <li className="sidebar-detail-content">
                      <div className="website icons"></div>
                      <div className="sidebar-detail-title">
                        Website:

                        </div>
                      <div className="sidebar-detail-value">
                        <a className="url-link-color" href={this.restaurant.website}>
                          {this.restaurant.website}
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="detail-footer">
          <div>
            
          </div>

        </div>


      </div>
    );
  }
}
}