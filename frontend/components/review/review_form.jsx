import React from 'react';
import isEmpty from 'lodash/isEmpty';


class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.fetchAllRestaurants = props.fetchAllRestaurants;
    this.restId = props.match.params.restID;
    this.createReview = props.createReview;
    this.fetchRestaurant = props.fetchRestaurant;

    this.state = {
      author_id: props.currentUser.id,
      restaurant_id: this.restId,
      rating: '',
      comment: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {

    this.fetchAllRestaurants();
    this.restaurant = this.props.restaurants[this.restId];
    this.reversedReview = this.restaurant.reviews.reverse();
  }


  update(field) {


    return (e => this.setState({
      [field]: e.currentTarget.value
    })
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = this.state;
    this.props.createReview(review).then(() => this.fetchAllRestaurants())
    .then(() => this.fetchRestaurant(this.restId)).then(() => this.setState({
      rating: '',
      comment:''
    }));

    $('.rating-button').attr('checked', false);

  }
  render() {
    // this.fetchRestaurant(this.restId);
    // this.fetchAllRestaurants();
    if (isEmpty(this.props.restaurants)) {
      // console.log("empty");

    } else {

    }



    return (
      <div className="review-wrapper">
        <form onSubmit={this.handleSubmit} className="restaurant-form-box">
          <div className="rating-form">
            <br />
            <label>Rating:</label>

            <div className="rating-buttons">
              1&nbsp;<input type="radio" onChange={this.update('rating')} name='rating' value='1' className="rating-button" />
              2&nbsp;<input type="radio" onChange={this.update('rating')} name='rating' value='2' className="rating-button" />
              3&nbsp;<input type="radio" onChange={this.update('rating')} name='rating' value='3' className="rating-button" />
              4&nbsp;<input type="radio" onChange={this.update('rating')} name='rating' value='4' className="rating-button" />
              5&nbsp;<input type="radio" onChange={this.update('rating')} name='rating' value='5' className="rating-button" />
            </div>

            <input type="text" value={this.state.comment} placeholder="Comments:"
              onChange={this.update('comment')} className="review-input" />
            <input type="submit" value="Submit Review" className="review-submit-button" />
          </div>
        </form>
        <hr />
        <br />
        <h1 className="body-main-left-title">
          Ratings / Reviews
        </h1>
        <hr />
        <div>
          <ul>

            {isEmpty(this.restaurant.reviews) ? "im empty" :
              this.reversedReview.map(review => (
                
                <li key={review.id}>
                  {console.log(this.props)}
                  {review.comment}
                  <br />
                  <hr/>
                  <br />
                </li> 
              ))             
            }

          </ul>
        </div>
      </div>
    );
  }
}
export default ReviewForm;