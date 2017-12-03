import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import uniqueId from '../../utils/id_gen';
import SearchTool from './search_tool';
import IndexSideBar from './restaurant_index_sidebar';
import Modal from 'react-modal';
import customStyles from '../../utils/modal_style';
import restImageStyle from '../../utils/rest_image_modal_style';

export default class RestaurnantIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    
    this.currentUser = props.currentUser;
    
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
  }
  componentWillMount() {
    this.props.fetchAllRestaurants().then(() =>{
    });
  }
  componentDidMount(){    
    
    // $('.dropdown-content').css('opacity', 0).removeClass('show');
  }

  handleImageClick(e, restaurant) {
    e.preventDefault();
    
    
    this.restImage = restaurant.image_url.replace('one-table.', '');
    
    
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

  afterOpenModal() {
  }

  destructRestaurant(restaurant) {
    
    this.fixedImageUrl = restaurant.image_url;
  
    if (restaurant.image_url.includes('/one-table.')) {
      
      
      this.fixedImageUrl = restaurant.image_url.replace('/one-table.', '/');
      
      
    }
    
    let style = {
      opacity: 0.9,
      backgroundSize: '150px 150px',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url(${this.fixedImageUrl})`,
      imageWidth: '250' 
    };

    return (
      <li className="list-item" style={style} key={`${restaurant.id}-${uniqueId()}`}>
        <div className="list-item-thumb" onClick={(e) => this.handleImageClick(e, restaurant)}>
        <p className="thumb-click"></p>
        </div> 
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
    console.log('3');
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

