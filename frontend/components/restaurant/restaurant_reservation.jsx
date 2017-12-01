import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import customStyles from '../../utils/modal_style';

export default class RestraurantReservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numPeople: "",
      date: "",
      time: "",
      location: "",
      modalIsOpen: false
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
    this.setState({ modalIsOpen: false });
    // this.props.history.push('/');
  }

  afterOpenModal() {
  }

  reservationErrorMessage() {
    return (
      <div className="login-form-container">
        <div className="login-form new-restaurant-message-modal">

          <h2>Oops...</h2>
          <p>
            Reservation is not available right now<br />
            Please try again later!
          </p>

          <input type="button" className="return-to-main" onClick={() => this.closeModal()}
            value="RETURN" />
        </div>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.openModal();
    // const user = this.state;
    // this.props.processForm(user).then(() => this.closeModal());
  }

  render() {

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();

    const todayString = `${mm}/${dd}/${yyyy}`;

    return (
      <div className="main-content-search-tool">
        <div className="search-tool-box">
          <form className="tool-box-form" id="tool-box-form" onClick={e => this.handleSubmit(e)}>
            <select name="num_of_people" className="styled-select people width-27p">
              <option defaultValue="1">1 Person</option>
              <option defaultValue="2">2 People</option>
              <option defaultValue="3">3 People</option>
              <option defaultValue="4">4 People</option>
              <option defaultValue="5">5 People</option>
              <option defaultValue="6+">6+ People</option>
            </select>

            {/* {this.num_of_people()} */}
            <input type="date" name="date" className='search-date width-27p' id="date" defaultValue="2017-11-28" />

            <select name="time" className="styled-select time width-27p" name='time'>
              <option defaultValue="17:00">5:00 PM</option>
              <option defaultValue="18:00">6:00 PM</option>
              <option defaultValue="19:00">7:00 PM</option>
              <option defaultValue="20:00">8:00 PM</option>
              <option defaultValue="21:00">9:00 PM</option>
            </select>
            <input type="submit" defaultValue="Find a Table" className="width-16p"/>
          </form>
        </div>

        <Modal
          isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal} style={customStyles}
        >
          {this.reservationErrorMessage()}
        </Modal>
      </div>
    );
  }
}