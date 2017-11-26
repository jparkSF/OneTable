import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import uniqueId from '../../utils/id_gen';

class MainContent extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchAllRestaurants();
  }
  
  componentWillReceiveProps(){
    this.render();
  }

  destructRestaurant(restaurant){
    return(
      <li key={`${restaurant.id}-${uniqueId()}`}>
        <h5>
          <Link to={`/restaurants/${restaurant.name}`}>
          <p>  {restaurant.name}</p>
          </Link>
        </h5>
      </li>
    );
  }

  scrollArrowButtons() {
    return(
      <div className="paddles">
        <a className="left-paddle paddle hidden">
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </a>
		    <a className="right-paddle paddle">
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </a>
	    </div>
    );
  }

  render(){
  
    const restaurants = this.props.restaurants;
    if (isEmpty(restaurants)){
     return null;
    } else {
      return (      
        <div className="content-block">
          <h1 className="content-block-header">Top Cuisines Near You</h1>
          {this.scrollArrowButtons()}
          <div className="content-block-body">
            <ul className="">
              {
              Object.keys(restaurants).map((index)=> this.destructRestaurant(restaurants[index]))
              }
            </ul>
          </div>   
        </div>
      );
    }
  }
}

export default withRouter(MainContent);