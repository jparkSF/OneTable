import React from 'react';
import { Link, Switch } from 'react-router-dom';
import GreetingContainer from './greeting_container';
import isEmpty from 'lodash/isEmpty';

export default class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };

  }

  componentWillMount() {
    this.props.fetchAllRestaurants();
    
  }

  componentDidMount(){
    $('.search-result').css('display', 'none');
  }

  update(field) {
    console.log('hit');
    $('.search-result').removeClass('hidden').css('display', 'block');
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    window.onclick = function (event) {
      if (!event.target.matches('.header-search-wrapper')) {
        $('.search-result').css('display', 'none');
      }
    };


    const restaurants = Object.values(this.props.restaurants);
    let filteredRestaurants = [];
    if (!isEmpty(restaurants)) {

      filteredRestaurants = restaurants.filter(
        (restaurant) => {
          return restaurant.name.toLowerCase()
                  .indexOf(this.state.search.toLowerCase()) !== -1;
        }
      );
    }

    return (
      <header>
        <div className="header-left">
          <Link to="/" className="header-link">
            <div className="logo"></div>
          </Link>

          <div className="header-search-wrapper">
            <i className="fa fa-map-marker fa-lg header-location" aria-hidden="true"></i>
            <input type="text" className="header-search" defaultValue={this.state.search}
              onChange={() => this.update('search').bind(this)} placeholder="Find a restaurant" />
            <div className="search-result hidden">
              <ul className="search-result-lists">
                {
                  filteredRestaurants.map((restaurant) => {
                    return (
                      <li className="search-result-list" key={restaurant.id}>
                        <Link to={restaurant.name}>
                          {restaurant.name}
                        </Link>
                      </li>
                    );
                  })
                }
              </ul>
            </div>
          </div>

        </div>
        <GreetingContainer />
      </header >
    );
  }
}
