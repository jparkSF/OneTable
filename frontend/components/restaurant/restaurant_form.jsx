import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export default class RestaurantForm extends React.Component{
  constructor(props){
    
    super(props);
    this.renderErrors = this.renderErrors.bind(this);
    this.currentUser = props.currentUser;
    this.createRestaurant = props.createRestaurant.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: "",
      owner_id: this.currentUser.id,  
      phone_number: "",
      address:"",
      website:"",
      description:"",
      opening: "",
      closing:""
    };

      console.log(props);
    // this.update = this.update.bind(this);
    
  }

  handleSubmit(e){

    e.preventDefault();
    const restaurant = this.state;
    this.props.createRestaurant(restaurant).then(() =>  this.props.history.push('/'));
  }
  update(field) {
    return (e => this.setState({
      [field]: e.currentTarget.value
    })
    );
  }
 

  restaurantName() {    
    return (
      <input type="text" placeholder="Restaurant name *" value={this.state.name}
        onChange={this.update('name')} className="login-input" />
    );
  }
 
  phone_number() {
    return (
      <input type="text" placeholder="Phone number *" value={this.state.phone_number}
        onChange={this.update('phone_number')} className="login-input" />
    );
  }
  address() {
    return (
      <input type="text" placeholder="Restaurant address " value={this.state.address}
        onChange={this.update('address')} className="login-input" />
    );
  }
  website() {
    return (
      <input type="text" placeholder="Website" value={this.state.website}
        onChange={this.update('website')} className="login-input" />
    );
  }
  opening() {
    return (
      <input type="text" placeholder="Opening time *" value={this.state.opening}
        onChange={this.update('opening')} className="login-input" />
    );
  }
  closing() {
    return (
      <input type="text" placeholder="Closing time *" value={this.state.closing}
        onChange={this.update('closing')} className="login-input" />
    );
  }
  description() {
    return (
      <input type="text" placeholder="Description *" value={this.state.description}
        onChange={this.update('description')} className="login-input" />
    );
  }
  newRestaurantMessage(){
    return(
      <div className="new-restaurant-message">
        <h2>Grow Your Business with OpenTable</h2>
        <p>
          Tell us a little about you and your restaurant,
            and we’ll contact you via phone or email to provide information about
            OneTable’s products and services. Or,
            give us a ring at (415) 317-5997.
          </p>
      </div>
    );
  }


  mainForm() {

    return (
     
    
        <div className="login-form">
          <br />
          
          {this.restaurantName()}
          {this.phone_number()}
          {this.address()}
          {this.website()}
          {this.opening()}
          {this.closing()}
          {this.description()}
          <input type="submit" value="SUBMIT" />
  
        </div>
      
    );
    }
  
  renderErrors() {
    const errors = this.props.errors.session;
    return (
      <ul className="error-lists">
        {this.props.errors.session.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


  

  render(){
    return (
      
      <div className="new-restaurant-container">
        {this.newRestaurantMessage()}
        <div className="restaurant-form">
        <form onSubmit={this.handleSubmit} className="restaurant-form-box">
          
          
          {/* {this.renderErrors()} */}

          {this.mainForm()}


        </form>
        <hr />
        
        </div>
      </div>
    );

  }


}

