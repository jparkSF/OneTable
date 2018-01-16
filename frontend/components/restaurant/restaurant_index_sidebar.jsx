import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import uniqueId from '../../utils/id_gen';

export default class IndexSideBar extends React.Component{
  constructor(props){
    super(props);
    console.log(props)
  }

  componentDidMount(){
  }
  
  filterRegion(region){
    console.log(region)
  }
  regionSelector(){
    return(
      <form>
        <input type="radio" name="region" onClick={() => this.filterRegion("fidi")}  defaultValue="downtown"/> Downtown / FiDi<br />
        <input type="radio" name="region" onClick={() => this.filterRegion("soma")} defaultValue="soma"/> SOMA<br />
        <input type="radio" name="region" onClick={() => this.filterRegion("mission")} defaultValue="mission" /> Mission<br />
        <input type="radio" name="region" onClick={() => this.filterRegion("japantown")} defaultValue="japantown" /> Japantown<br />
      </form> 
    );
  }
  cuisineSelector() {
    return (
      <form>
        <input type="checkbox" name="cuisine" defaultValue="american" /> American<br />
        <input type="checkbox" name="cuisine" defaultValue="italian" /> Italian<br />
        <input type="checkbox" name="cuisine" defaultValue="steakhouse" /> Steakhouse<br />
        <input type="checkbox" name="cuisine" defaultValue="seafood" /> Seafood<br />
        <input type="checkbox" name="cuisine" defaultValue="french" /> French<br />
        <input type="checkbox" name="cuisine" defaultValue="indian" /> Indian<br />
        <input type="checkbox" name="cuisine" defaultValue="japanese" /> Japanese<br />
        <input type="checkbox" name="cuisine" defaultValue="chinese" /> Chinese<br />
      </form>
    );
  }

  ratingSelector() {
    // const star = '<i class="fa fa-star" aria-hidden="true"></i>'; 
    {/* {Array(6).join(star)}<br /> */ }
    return (
      <form>
        <input type="checkbox" name="rating" defaultValue="5" />&nbsp;&nbsp;
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i> 
          <br />
        <input type="checkbox" name="rating" defaultValue="4" />&nbsp;&nbsp;
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <br />
        <input type="checkbox" name="rating" defaultValue="3" />&nbsp;&nbsp;
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <br />
        <input type="checkbox" name="rating" defaultValue="2" />&nbsp;&nbsp;
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>  
          <br />
        <input type="checkbox" name="rating" defaultValue="1" />&nbsp;&nbsp;
          <i className="fa fa-star" aria-hidden="true"></i>
          <br />
      </form>
    );
  }

  render(){
    return(
      <div className="sidebar-wrapper">
        <label>REGIONS</label>
        {this.regionSelector()}
        <hr/>
        <label>CUISINE</label>
        {this.cuisineSelector()}
        <hr />
        <label>RATINGS</label>
        {this.ratingSelector()}
      </div>
    );
  }


}

