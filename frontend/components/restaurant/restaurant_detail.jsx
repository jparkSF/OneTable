import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import uniqueId from '../../utils/id_gen';
import SearchTool from './search_tool';
import IndexSideBar from './restaurant_index_sidebar';
import RestaurantReservation from './restaurant_reservation';
import isEmpty from 'lodash/isEmpty';
import { createFavorite, deleteFavorite } from '../../utils/favorites';

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


  if (!this.state.favorite) {
    console.log('inside');
    console.log(data);
    createFavorite(data);
    this.setState({ favorite: true });
    $('.restaurant-detail-favorite').addClass('favorite-active');
    $('.favorite-wording').text('Favorited');
    $('.favorite-icon').removeClass('fa-heart');
    $('.favorite-icon').removeClass('fa-heart-o').addClass('fa-heart');
  } else {
    console.log('outside');
    console.log(data);
    deleteFavorite(data);
    this.setState({ favorite: false });
    $('.restaurant-detail-favorite').removeClass('favorite-active');
    $('.favorite-wording').text('Add to Favorite');
    $('.favorite-icon').addClass('fa-heart-o').removeClass('fa-heart');
  }
  
  this.fetchAllRestaurants();
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

activeFav(){
  return(
    <div className="restaurant-detail-favorite favorite-active">

    <i className="fa fa-heart favorite-icon" id="empty-heart" aria-hidden="true"></i>
    <span className="favorite-wording">Favorited</span>

  </div>
  );
}


destructRestaurant() {


  if (this.restaurant === undefined) {
    return (<div></div>);
  } else {

    return (
      <div>
        <div className="list-item-thumb" ></div>
        <div className="list-item-info">
         
          <p className="detail-restaurant-name">{this.restaurant.name}</p>
          <p>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
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
  
  
  const stateEmpty = isEmpty(this.props.restaurants);
  if (stateEmpty) {
    return (<div></div>);
  } else {

    this.restaurant = this.props.restaurants[this.restId];
    return (
      <div className="detail-main">
        <div className="detail-header">
          <div className="detail-header-wrapper">
            <div className="detail-header-image-thumb">
              <img src={this.restaurant.image_url} alt="" />
            </div>
            <div className="detail-header-rest-info">
              {this.destructRestaurant()}
            </div>
          </div>
        </div>
        <div className="detail-body">
          <div className="detail-body-side">
            <div className="body-side-wrapper">
              
              <a href="#reservation">Reservations</a><br />
              <a href="#about">About</a><br />
              <a href="#review">Reviews</a><br />
        
              <Link to={'/restaurant/'+this.restId+"#photo"}>Photos</Link>
              
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
                <p>
                  lat: {this.restaurant.lat}<br />
                  lng: {this.restaurant.lng}
                </p>
                <br /><br /><br /><br /><br /><br /><br />

              </div>
              <div id="rating" className="body-main-left-inner-wrapper">
                <h1 className="body-main-left-title">
                  Ratings / Reviews
                  </h1>
                <hr />
                <br /><br /><br /><br /><br /><br /><br />
              </div>
              <div id="photo" name="photo" className="body-main-left-inner-wrapper">
                <h1 className="body-main-left-title">
                  Restaurant Photos
                  </h1>
                <hr />
                <br /><br /><br /><br /><br /><br /><br />

              </div>

            </div>
            <div className="detail-body-main-right">
              <div className="body-main-left-inner-wrapper main-right-inner-wrapper">
                <div className="sidebar-details">
                  <ul>
                    <li className="sidebar-detail-content">
                      <div className="sidebar-detail-title">
                        Dining Style:
                        </div>
                      <div className="sidebar-detail-value">
                        Fine Dining
                        </div>
                    </li>
                    <li className="sidebar-detail-content">
                      <div className="sidebar-detail-title">
                        Hours of Operation:
                        </div>
                      <div className="sidebar-detail-value">
                        Open {this.restaurant.opening.slice(0, 5)} to {this.restaurant.closing.slice(0, 5)} daily
                        </div>
                    </li>
                    <li className="sidebar-detail-content">
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
                      <div className="sidebar-detail-title">
                        Cuisine:
                        </div>
                      <div className="sidebar-detail-value">
                        American, California
                        </div>
                    </li>
                    <li className="sidebar-detail-content">
                      <div className="sidebar-detail-title">
                        Website:

                        </div>
                      <div className="sidebar-detail-value">
                        <a href={this.restaurant.website}>
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
            footer
            </div>

        </div>


      </div>
    );
  }
}
}