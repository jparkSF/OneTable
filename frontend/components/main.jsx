import React from 'react';
import MainContentContainer from './main_content/main_content_container';
import RestaurantsFormContainer from './restaurant/restaurant_form_container';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';





class Main extends React.Component {
  constructor(){
    super();

    
  }

  render() {
    return (
    <Switch>
        <Route path='/restaurant/new' component={RestaurantsFormContainer} />
        <Route path='/' component={MainContentContainer}/>
    </Switch>
     
    );
  }
}

export default withRouter(connect()(Main));