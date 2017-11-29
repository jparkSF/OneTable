import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import uniqueId from '../../utils/id_gen';
import SearchTool from './search_tool';
import IndexSideBar from './restaurant_index_sidebar';

export default class RestaurantDetail extends React.Component{
  constructor(props){
    super(props);

    this.fetchRestaurant = props.fetchRestaurant;
    this.restId = props.match.params.restID;
    
    this.restaurant = props.restaurants[this.restId];
    

  }

  componentDidMount(){
    $('.header-search-wrapper').addClass('hidden');
  }

  render(){
    console.log(this.restaurant);
    return(
      <div>
        in restaurant detail for {this.restId}
      </div>
    );
  }
}