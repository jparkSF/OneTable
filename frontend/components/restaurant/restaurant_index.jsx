import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import uniqueId from '../../utils/id_gen';
import SearchTool from './search_tool';
import IndexSideBar from './restaurant_index_sidebar';

export default class RestaurnantIndex extends React.Component {
  constructor(props) {
    super(props);
    
    this.currentUser = props.currentUser;
  }
  componentWillMount() {
    this.props.fetchAllRestaurants();
  }
  componentDidMount(){    
    
    // $('.dropdown-content').css('opacity', 0).removeClass('show');
  }

  destructRestaurant(restaurant) {
    let fixedImageUrl = restaurant.image_url;
    
    if (restaurant.image_url.includes('one-table-dev/')) {
      fixedImageUrl = restaurant.image_url.replace('one-table-dev/', '');
    }

    let style = {
      opacity: 0.9,
      backgroundSize: '150px 150px',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url(${fixedImageUrl})`,
      imageWidth: '250' 
    };

    return (
      <li className="list-item" style={style} key={`${restaurant.id}-${uniqueId()}`}>
        <div className="list-item-thumb" ></div>
        <div className="list-item-info">
          <Link to={`/restaurant/${restaurant.id}`}>
            <p className="restaurant-name">{restaurant.name}</p>
            <p>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
            </p>
            <p className="restaurant-cuisine">American</p>
            
            <div className="list-item-time">
              <input className="listTime" type="button" defaultValue="5:00 pm"/>
              <input className="listTime" type="button" defaultValue="6:00 pm"/>
              <input className="listTime" type="button" defaultValue="7:00 pm"/>
              <input className="listTime" type="button" defaultValue="8:00 pm"/>
              <input className="listTime" type="button" defaultValue="9:00 pm"/>
            </div>
            

          </Link>
        </div>
        <hr />
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
          <div className="index-sidebar">
            <IndexSideBar />
          </div>
          <div className="index-main-content">
            <ul className="index-lists-ul">
              {
                Object.keys(restaurants).map((index) => this.destructRestaurant(restaurants[index]))
              }
            </ul>
          </div>
          
        </div>
      </div>
    );
  }
}

