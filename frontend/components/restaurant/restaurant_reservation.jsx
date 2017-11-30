import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export default class RestraurantReservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numPeople: "",
      date: "",
      time: "",
      location: ""
    };


  }

  handleSubmit(e) {
    e.preventDefault();
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
          <form className="tool-box-form" id="tool-box-form" action="">
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
      </div>
    );
  }
}