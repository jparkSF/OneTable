import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import customStyles from '../../utils/modal_style';

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
      phone_number: "",
      address: "",
      website: "",
      description: "",
      opening: "",
      closing: ""
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
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
      <div className="new-restaurant-message">
        <h2>Grow Your Business with OneTable</h2>
        <p>
          Tell us a little about you and your restaurant,
            and we’ll contact you via phone or email
            <br />
          to provide information about
            OneTable’s products and services.
            <br />
          Or, give us a ring at
            <a className="phone-number-link"> (415) 317-5997</a>.
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
        <div className="login-form new-restaurant-message">

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
      <div className="login-form">
        <br />
        <input type="text" placeholder="Restaurant name *" value={this.state.name}
          onChange={this.update('name')} className="login-input" />
        <input type="text" placeholder="Phone number *" value={this.state.phone_number}
          onChange={this.update('phone_number')} className="login-input" />
        <br />
        <input type="text" placeholder="Restaurant address " value={this.state.address}
          onChange={this.update('address')} className="login-input" />
        <input type="text" placeholder="Website" value={this.state.website}
          onChange={this.update('website')} className="login-input" />
        <br />
        <input type="text" placeholder="Opening time *" value={this.state.opening}
          onChange={this.update('opening')} className="login-input" />
        <input type="text" placeholder="Closing time *" value={this.state.closing}
          onChange={this.update('closing')} className="login-input" />
        <br />
        <input type="text" placeholder="Description *" value={this.state.description}
          onChange={this.update('description')} className="login-input input-description" />
        <br />
        <input type="submit" value="SUBMIT" />
      </div>
    );
  }

  renderErrors() {
    const errors = this.props.errors;
    return (
      <ul className="error-lists">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="new-restaurant-container">
        {this.newRestaurantMessage()}
        <div className="restaurant-form">
          <form onSubmit={this.handleSubmit} className="restaurant-form-box">
            {/* {this.renderErrors()} */}
            {this.mainForm()}

            <Modal
              isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal} style={customStyles}
            >
              {this.successMessage()}
            </Modal>
          </form>
          <hr />
        </div>
        <div className='footer'>
          <footer>
            OneTable, Inc <br />
            <a href="onetable-jwp.herokuapp.com" className="footer-site-url">onetable-jwp.herokuapp.com</a><br />
            825 Battery St, 3rd Floor  <br />
            San Francisco, CA 94111 <br />
          </footer>
        </div>
      </div>
    );
  }
}

