import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Root from './components/Root'
import Footer from './components/Footer'
import Home from './components/Home'

class Routes extends Component {

  // componentDidMount () {
  //   this.props.fetchInitialData();
  // }

  render () {
    return (
      <Router history={history}>
        <Root>
          <Switch>
            <Route path="/stories/:id" component={Footer} />
            <Route component={Home} />
          </Switch>
        </Root>
      </Router>
    );
  }
}

export default Routes
