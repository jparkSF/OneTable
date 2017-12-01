import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import uniqueId from '../../utils/id_gen';
import Map from './map';
import MainSearchTool from './main_search_tool';

class MainContent extends React.Component {
  constructor(props) {
    super(props);    
  }

  componentWillMount() {
    $('.header-search-wrapper').removeClass('hidden');
    this.props.fetchAllRestaurants();

  }

  destructRestaurant(restaurant) {
    let fixedImageUrl = restaurant.image_url;

    if (restaurant.image_url.includes('one-table-dev/')) {
      fixedImageUrl = restaurant.image_url.replace('one-table-dev/', '');
    }

    let style = {
      opacity: 0.9,
      backgroundSize: '210px 210px',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url(${fixedImageUrl})`
    };

    return (
      <li className="list-item" style={style} key={`${restaurant.id}-${uniqueId()}`}>
        <h5>
          <Link to={`/restaurant/${restaurant.id}`}>
            <p>{restaurant.name}</p>
          </Link>
        </h5>
      </li>
    );
  }

  scrollArrowButtons() {
    return (
      <div className="paddles">
        <a className="left-arrow paddle hidn">
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </a>
        <a className="right-arrow paddle">
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </a>
      </div>
    );
  }

  render() {
    const restaurants = this.props.restaurants;
    if (isEmpty(restaurants)) {
      return null;
    } else {
      return (
        <div>
          <div className="main-bg"></div>
          <div className="main-body">
            <div className="main-content">
              <div className="search-wrapper">
                <h1 className="content-block-header search-title">
                  Make restaurant reservations the easy way, or...
                  <br />
                  <a href='/#/restaurants' className="strong-text">
                  <b>Click here</b> to see all restaurants!
                  </a>
                </h1>
                <div className="content-search">
                  <MainSearchTool />
                </div>
              </div>
            </div>

            {/* TOP CUISINES NEAR YOU */}
            <div className="main-contents">
              <div className="content-block">
                <Link to='/restaurants'>
                  <h1 className="content-block-header">Top Cuisines Near You</h1>
                </Link>
                {this.scrollArrowButtons()}
                <div className="content-block-body">
                  <ul className="restaurant-lists">
                    {
                      Object.keys(restaurants).map((index) => this.destructRestaurant(restaurants[index]))
                    }
                  </ul>
                </div>
              </div>
            </div> 
            
            {/* FEATURED AREAS */}
            <div className="main-contents">
              <div className="content-block">
                <Link to='/restaurants'>
                  <h1 className="content-block-header">Featured Local Areas</h1>
                </Link>
                
                <div className="content-block-body">
                  <div className="content-block-body featured-area">

                    <div id="fidi" className="featured-area-items fidi">
                      <div className="area-items-outer-box">
                        <a href="/#/restaurants">
                          <div className="area-items-inner-box">
                            <h1>Downtown / FIDI</h1>
                            <p>123 restaurants</p>
                          </div>
                        </a> 
                      </div>
                    </div>

                    <div id="soma" className="featured-area-items soma">   
                      <div className="area-items-outer-box">
                        <a href="/#/restaurants">
                          <div className="area-items-inner-box">
                            <h1>SOMA</h1>
                            <p>123 restaurants</p>
                          </div>
                        </a>
                      </div>
                    </div>
                    
                    <div id="mission" className="featured-area-items mission">   
                      <div className="area-items-outer-box">
                        <a href="/#/restaurants">
                          <div className="area-items-inner-box">
                            <h1>Mission</h1>
                            <p>123 restaurants</p>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div id="japantown" className="featured-area-items japantown">
                      <div className="area-items-outer-box">
                        <a href="/#/restaurants">
                          <div className="area-items-inner-box">
                            <h1>Japantown</h1>
                            <p>123 restaurants</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> 


            {/* Popular Cuisines */}
            <div className="main-contents">
              <div className="content-block">
                <Link to='/restaurants'>
                  <h1 className="content-block-header">Popular Cuisines</h1>
                </Link>

                <div className="content-block-body">
                  <div className="content-block-body popular-cuisine">
                    <ul>
                      <li>
                        <div id="" className="featured-area-items popular-list-item korean">
                          <div className="area-items-outer-box popular-inner-wrapper">
                            <a href="/#/restaurants">
                              <div className="area-items-inner-box">
                                <h1>Korean</h1>
                                <p>123 restaurants</p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div id="" className="featured-area-items popular-list-item american">
                          <div className="area-items-outer-box popular-inner-wrapper">
                            <a href="/#/restaurants">
                              <div className="area-items-inner-box">
                                <h1>American</h1>
                                <p>123 restaurants</p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div id="" className="featured-area-items popular-list-item italian">
                          <div className="area-items-outer-box popular-inner-wrapper">
                            <a href="/#/restaurants">
                              <div className="area-items-inner-box">
                                <h1>Itanlian</h1>
                                <p>123 restaurants</p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div id="" className="featured-area-items popular-list-item steakhouse">
                          <div className="area-items-outer-box popular-inner-wrapper">
                            <a href="/#/restaurants">
                              <div className="area-items-inner-box">
                                <h1>Steakhouse</h1>
                                <p>123 restaurants</p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div id="" className="featured-area-items popular-list-item seafood">
                          <div className="area-items-outer-box popular-inner-wrapper">
                            <a href="/#/restaurants">
                              <div className="area-items-inner-box">
                                <h1>Seafood</h1>
                                <p>123 restaurants</p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div id="" className="featured-area-items popular-list-item japanese">
                          <div className="area-items-outer-box popular-inner-wrapper">
                            <a href="/#/restaurants">
                              <div className="area-items-inner-box">
                                <h1>Japanese</h1>
                                <p>123 restaurants</p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </li>
                      

                    </ul>
                  </div>
                </div>
              </div>
            </div> 


          </div>
          <div className="main-side">
            <Map />
          </div>
        </div>
      );
    }
  }
}

export default withRouter(MainContent);
