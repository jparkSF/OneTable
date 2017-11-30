import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import uniqueId from '../../utils/id_gen';
import SearchTool from './search_tool';
import IndexSideBar from './restaurant_index_sidebar';
import RestaurantReservation from './restaurant_reservation';
import isEmpty from 'lodash/isEmpty';

export default class RestaurantDetail extends React.Component {
  constructor(props) {
    super(props);

    this.fetchRestaurant = props.fetchRestaurant;
    this.fetchAllRestaurants = props.fetchAllRestaurants;
    this.restId = props.match.params.restID;
    
  }

  componentDidMount() {

    $('.header-search-wrapper').addClass('hidden');
  }

  componentWillMount() {
    // this.fetchRestaurant();
    this.fetchAllRestaurants();
    
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
              <a className="favorite-toggle">
                <div className="restaurant-detail-favorite">
                
                  <i className="fa fa-heart-o" id="empty-heart" aria-hidden="true"></i>
                  <span>Add to Favorites</span>
                
                </div>
              </a>
            </div>

          </div>
        </div>
      );
    }
  }

  render() {
    const stateEmpty = isEmpty(this.props.restaurants[this.restId]);
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
                <a href="#">Reservations</a><br />
                <a href="#">About</a><br />
                <a href="#">Photos</a><br />
                <a href="#">Reviews</a><br />
              </div>
            </div>

            <div className="detail-body-main">

              <div className="detail-body-main-left">

                <div className="body-main-left-inner-wrapper">
                  <h1 className="body-main-left-title">
                    Make a reservation
                </h1>
                  <RestaurantReservation />
                </div>
                <div className="body-main-left-inner-wrapper">
                  <h1 className="body-main-left-title">
                    About {this.restaurant.name}
                 </h1>

                
                 <hr/>
                  <p>
                    lat: {this.restaurant.lat}<br />
                    lng: {this.restaurant.lng}
                  </p>
                  <br /><br /><br /><br /><br /><br /><br />
                 
                </div>
                <div className="body-main-left-inner-wrapper">
                  <h1 className="body-main-left-title">
                    Ratings / Reviews
                  </h1>
                  <hr />
                  <br /><br /><br /><br /><br /><br /><br />
                </div>
                <div className="body-main-left-inner-wrapper">
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
                          Open {this.restaurant.opening.slice(0,5)} to {this.restaurant.closing.slice(0,5)} daily
                        </div>
                      </li>
                      <li className="sidebar-detail-content">
                        <div className="sidebar-detail-title">
                          Phone Number:
                        </div>
                        <div className="sidebar-detail-value">
                          {this.restaurant.phone.slice(0,3)}-
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
                          {this.restaurant.website}
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