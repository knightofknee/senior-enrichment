import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import history from './history'
import Root from './components/Root'
import Footer from './components/Footer'
import Home from './components/Home'
import { fetchStudents } from './reducers/students';
import { fetchCampuses } from './reducers/campuses';

class Routes extends Component {

  componentDidMount () {
    this.props.fetchInitialData();
  }

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
const mapProps = null;

const mapDispatch = dispatch => ({
  fetchInitialData: () => {
    dispatch(fetchStudents());
    dispatch(fetchCampuses());
    // what other data might we want to fetch on app load?
  }
});

export default connect(mapProps, mapDispatch)(Routes);
