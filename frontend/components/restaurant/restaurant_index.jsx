import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import uniqueId from '../../utils/id_gen';
import SearchTool from './search_tool';

export default class RestaurnantIndex extends React.Component {
  constructor(props) {
    super(props);
    
    this.currentUser = props.currentUser;
  }
  componentWillMount() {
    this.props.fetchAllRestaurants();
    
  }
  componentDidMount(){    
    $('.dropdown-content').css('opacity', 0).removeClass('show');
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
          <Link to={`/restaurants/${restaurant.name}`}>
            <p>{restaurant.name}</p>
            <p>{restaurant.phone_number}</p>
            <p>{restaurant.website}</p>
            <p>{restaurant.opening}</p>
            <p>{restaurant.closing}</p>
            <p>{restaurant.description}</p>

          </Link>
        </h5>
      </li>
    );
  }


  render() {
    let restaurants = this.props.restaurants;
    return (
      <div className="restaurant-index">
        <div className="index-search-tool">
          <SearchTool />
        </div>
        <div className="restaurant-index-lists">
          <ul className="index-lists-ul">
            {
              Object.keys(restaurants).map((index) => this.destructRestaurant(restaurants[index]))
            }
          </ul>
        </div>
      </div>
    );
  }
}

