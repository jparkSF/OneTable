import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import uniqueId from '../../utils/id_gen';
import SearchTool from './search_tool';
import IndexSideBar from './restaurant_index_sidebar';
import Modal from 'react-modal';
import customStyles from '../../utils/modal_style';
import restImageStyle from '../../utils/rest_image_modal_style';
import isEmpty from 'lodash/isEmpty';

export default class RestaurnantIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    // console.log(this.props)
    
    this.currentUser = props.currentUser;
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
  }
  componentWillMount() {
    this.props.fetchAllRestaurants().then(() =>{
      // console.log(this.props)
    });
  }
  componentDidMount(){    
    // $('.dropdown-content').css('opacity', 0).removeClass('show');
  }

  handleImageClick(e, restaurant) {
    e.preventDefault();
    this.restImage = restaurant.image_url.replace('://s3.', 's://s3-us-west-1.');
    this.openModal();
  }

  openModal() {
    this.setState({
      modalIsOpen: true,
    });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
    // this.props.history.push('/');
  }
  afterOpenModal(){
  }

  renderStars(averRating){
    let target = $('#list-item-rating-star');
    let domArray = [];
    if (averRating > 0) {
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

  destructRestaurant(restaurant) {
    
    this.fixedImageUrl = restaurant.image_url;
  
    if (restaurant.image_url.includes('://s3.')) {
      this.fixedImageUrl = restaurant.image_url.replace('://s3.', 's://s3-us-west-1.');
    }

    // if (restaurant.image_url.includes('/one-table.')) {
    //   this.fixedImageUrl = restaurant.image_url.replace('/one-table.', '/');
    // }
    
    // calculate the restaurant's average rating
    const reducer = (acc, currentValue) => acc + currentValue;
    let keys = Object.keys(restaurant.reviews);
    let ratings = [];
    let averRating;

    if (isEmpty(keys)){
      averRating = 0;
    } else {
      keys.forEach(key => ratings.push(restaurant.reviews[key].rating));
      let totalRate = ratings.reduce(reducer);
      averRating = Math.round(totalRate/ratings.length);
    }

    let style = {
      opacity: 0.9,
      backgroundSize: '150px 150px',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url(${this.fixedImageUrl})`,
      imageWidth: '250px' 
    };

    return (
      <li className="list-item" style={style} key={`${restaurant.id}-${uniqueId()}`}>
        <div className="list-item-thumb" onClick={(e) => this.handleImageClick(e, restaurant)}>
        <p className="thumb-click"></p>
        </div> 
        <div className="list-item-info">
          <Link to={`/restaurant/${restaurant.id}`}>
            <p className="restaurant-name">{restaurant.name}</p>  
            <p id="list-item-rating-star"className="list-item-rating">
              {this.renderStars(averRating)}
              <span className="total-reviews">&nbsp;&nbsp;{restaurant.reviews.length} Reviews</span>
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
          {
            isEmpty(restaurants) ? "" : <IndexSideBar restaurants={restaurants}/>
          }
            
          </div>
          <div className="index-main-content">
            <ul className="index-lists-ul">
              {
                Object.keys(restaurants).map((index) => this.destructRestaurant(restaurants[index]))
              }
            </ul>
          </div>
          
        </div>
        <Modal
          isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal} style={restImageStyle}
        >
          <img src={this.restImage} alt=""/> 
        </Modal>
      </div>
    );
  }
}

