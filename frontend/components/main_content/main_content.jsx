import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import uniqueId from '../../utils/id_gen';
import Map from './map';
import MainSearchTool from './main_search_tool';


class MainContent extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    // $('.dropdown-content').css('opacity',0).removeClass('show');
    
  }

  componentWillMount() {
    $('.header-search-wrapper').removeClass('hidden');
    this.props.fetchAllRestaurants();
    
  }
  componentWillReceiveProps(){
    
  }

  destructRestaurant(restaurant) {
    let fixedImageUrl = restaurant.image_url;

    if (restaurant.image_url.includes('one-table-dev/')) {
      fixedImageUrl = restaurant.image_url.replace('one-table-dev/', '');
    }

    let style = {
      opacity: 0.9,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url(${fixedImageUrl})`
    };

    return (
      <li className="list-item" style={style} key={`${restaurant.id}-${uniqueId()}`}>
        <h5>
          <Link to={`/restaurant/${restaurant.id}`}>
            <p>{restaurant.name}</p>
          </Link>
        </h5>
      </li>
    );
  }

  scrollArrowButtons() {
    return (
      <div className="paddles">
        <a className="left-arrow paddle hidden">
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </a>
        <a className="right-arrow paddle">
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </a>
      </div>
    );
  }



  render() {
    const restaurants = this.props.restaurants;
    if (isEmpty(restaurants)) {
      return null;
    } else {
      return (
        <div>
          <div className="main-bg"></div>
          <div className="main-body">
            <div className="main-content">
              <div className="search-wrapper">
                <h1 className="content-block-header search-title">
                  Make restaurant reservations the easy way
                </h1>
                <div className="content-search">
                  <MainSearchTool />
                </div>
              </div>
            </div>

            <div className="main-contents">
              <div className="content-block">
                <Link to='/restaurants'>
                  <h1 className="content-block-header">Top Cuisines Near You</h1>
                </Link>
                {this.scrollArrowButtons()}
                <div className="content-block-body">
                  <ul className="restaurant-lists">
                    {
                      Object.keys(restaurants).map((index) => this.destructRestaurant(restaurants[index]))
                    }
                  </ul>
                </div>
              </div>
            </div> 
          </div>
          <div className="main-side">
            <Map />
          </div>
        </div>
      );
    }
  }
}

export default withRouter(MainContent);
