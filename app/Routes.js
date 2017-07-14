import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import history from './history'
import Root from './components/Root'
import Home from './components/Home'
import EditRosters from './components/editRosters.js'
import CampusDisplay from './components/campusDisplay.js'
import { fetchStudents } from './reducers/students';
import { fetchCampuses } from './reducers/campuses';


class Routes extends Component {

  componentDidMount () {
    this.props.fetchInitialData();
  }

  render () {
    console.log(EditRosters)
    return (
      <Router history={history}>
        <Root>
          <Switch>
            <Route path="/edit" component={EditRosters} />
            <Route path="/campuses/:id" component={CampusDisplay} />
            <Route path="/" component={Home} />
          </Switch>
        </Root>
      </Router>
    );
  }
}
const mapProps = null;

const mapDispatch = dispatch => ({
  fetchInitialData: () => {
    dispatch(fetchCampuses());
    dispatch(fetchStudents());
    // what other data might we want to fetch on app load?
  }
});

export default connect(mapProps, mapDispatch)(Routes);
