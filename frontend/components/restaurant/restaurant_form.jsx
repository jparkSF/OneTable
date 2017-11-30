import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import customStyles from '../../utils/modal_style';
import isEmpty from 'lodash/isEmpty';

export default class RestaurantForm extends React.Component {
  constructor(props) {

    super(props);
    this.renderErrors = this.renderErrors.bind(this);
    this.currentUser = props.currentUser;
    this.createRestaurant = props.createRestaurant.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: "",
      owner_id: this.currentUser.id,
      phone: "",
      address: "",
      website: "",
      city: "",
      area: "",
      postal_code: ""
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
  }

  componentDidMount() {
    $('body').addClass("fixed-body");
    $('.main').addClass("fixed-main");
    $('.header-location').addClass("header-location-fixed");
    $('.header-search').addClass("header-search-fixed");
    $('.logo').addClass("logo-fixed");
    $('.header-name').addClass("header-name-fixed");
    $('.main-head').addClass("fixed-main-head");
  }

  componentWillUnmount() {
    $('body').removeClass("fixed-body");
    $('.main').removeClass("fixed-main");
    $('.header-location').removeClass("header-location-fixed");
    $('.header-search').removeClass("header-search-fixed");
    $('.logo').removeClass("logo-fixed");
    $('.header-name').removeClass("header-name-fixed");
    $('.main-head').removeClass("fixed-main-head");
  }


  openModal() {
    this.setState({
      modalIsOpen: true,
    });
  }

  closeModal() {
    this.props.history.push('/');
    this.setState({ modalIsOpen: false });
  }

  afterOpenModal() {
  }

  handleSubmit(e) {
    e.preventDefault();
    const restaurant = this.state;
    this.props.createRestaurant(restaurant).then(() => this.openModal());
  }

  update(field) {
    return (e => this.setState({
      [field]: e.currentTarget.value
    })
    );
  }



  newRestaurantMessage() {
    return (
      <div className="new-restaurant-message message-fixed">
        <h2>Grow Your Business with OneTable</h2>
        <p>
          Tell us a little about you and your restaurant,
            and we’ll contact you via phone or email
            <br />
          to provide information about
            OneTable’s products and services.
            <br />
          Or, give us a ring at
            <a className="light-blue"> (415) 317-5997</a>.
          </p>
      </div>
    );
  }

  handleReturnButtom() {
    this.props.history.push('/');
  }

  successMessage() {
    return (
      <div className="login-form-container">
        <div className="login-form new-restaurant-message-modal">

          <h2>Congrats!</h2>
          <p>You have successfully created a new restaurant!</p>
          <input type="button" className="return-to-main" onClick={() => this.closeModal()}
            value="RETURN TO MAIN PAGE" />
        </div>
      </div>
    );
  }

  mainForm() {
    return (
      <div className="login-form new-restaurant-form">
        <br />
        <input type="text" placeholder="Restaurant name *" value={this.state.name}
          onChange={this.update('name')} className="login-input" />
        <input type="text" placeholder="Phone number *" value={this.state.phone}
          onChange={this.update('phone')} className="login-input" />
        <input type="text" placeholder="Restaurant address " value={this.state.address}
          onChange={this.update('address')} className="login-input" />
        <input type="text" placeholder="City" value={this.state.city}
          onChange={this.update('city')} className="login-input" />
        <input type="text" placeholder="Postal code" value={this.state.postal_code}
          onChange={this.update('postal_code')} className="login-input" />
        <input type="text" placeholder="Area" value={this.state.area}
          onChange={this.update('area')} className="login-input" />
        <input type="text" placeholder="Website" value={this.state.website}
          onChange={this.update('website')} className="login-input" />

        <input type="submit" value="SUBMIT" />
      </div>
    );
  }

  renderErrors() {
    const errors = this.props.errors;
    console.log(this.props.errors);
    if (isEmpty(errors)) {
      return (<div></div>);
    } else {
      return (
        <ul className="error-lists">
          {errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  render() {
    return (
      <div className="new-restaurant-container">
        {this.newRestaurantMessage()}
        <div className="restaurant-form">
          <div className="restaurant-form-errors">
            {this.renderErrors()}

          </div>
          <form onSubmit={this.handleSubmit} className="restaurant-form-box">
            
            {this.mainForm()}

            <Modal
              isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal} style={customStyles}
            >
              {this.successMessage()}
            </Modal>
          </form>

        </div>
        <div className='footer'>
          <footer>
            OneTable, Inc <br />
            <a href="onetable-jwp.herokuapp.com" className="light-blue">onetable-jwp.herokuapp.com</a><br />
            825 Battery St, 3rd Floor  <br />
            San Francisco, CA 94111 <br />
          </footer>
        </div>
      </div>
    );
  }
}

