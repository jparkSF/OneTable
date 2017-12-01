import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import customStyles from '../../utils/modal_style';

export default class SearchTool extends React.Component{
  constructor(props){
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

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    
    this.openModal();

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
  
  reservationErrorMessage() {
    return (
      <div className="login-form-container">
        <div className="login-form new-restaurant-message-modal">

          <h2>Oops!</h2>
          <p>Reservation is currently unavailable</p><br />
          <p>Please try again later!</p>
          <input type="button" className="return-to-main" onClick={() => this.closeModal()}
            value="RETURN" />
        </div>
      </div>
    );
  }
  
  render(){
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth()+1;
    const yyyy = today.getFullYear();

    const todayString = `${mm}/${dd}/${yyyy}`;
    
    return(
      <div className="inner-search-tool">
        <div className="search-tool-box">
          <form className="tool-box-form border" id="tool-box-form" onclick={this.handleSubmit}>
            <select name="num_of_people" className="styled-select people">
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4">4 People</option>
              <option value="5">5 People</option>
              <option value="6+">6+ People</option>
            </select>
            
            {/* {this.num_of_people()} */}
            <input type="date" name="date" className='search-date' id="date" value="2017-11-28"/>

            <select name="time" className="styled-select time" name='time'>
              <option value="17:00">5:00 PM</option>
              <option value="18:00">6:00 PM</option>
              <option value="19:00">7:00 PM</option>
              <option value="20:00">8:00 PM</option>
              <option value="21:00">9:00 PM</option>
            </select>
            <div className="search-text-wrapper">
              <input type="text" name="where" className="search-text-input"
                    onChange={this.update('location')} 
                    value={this.state.location} 
                    placeholder="Restaurant"/>
              <i className="fa fa-search search-text-input-icon" aria-hidden="true"></i>
            </div>
            
            
            <input type="submit" value="Find a Table"/>
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