import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { removeCampus } from '../reducers/campuses';

class CampusItem extends Component {

  constructor (props){
    super(props)
    this.removeCampusCallback = this.removeCampusCallback.bind(this)
   // this.setStatestate({campus: this.props.campus })
  }

  render() {
    const { campus } = this.props
    return (
      <div className="list-group-item min-content user-item">
        <div className="media">
          <div className="media-left media-middle icon-container">
            {/* <img className="media-object img-circle" src={user.photo} /> */}
          </div>
          <NavLink
            className="media-body"
            activeClassName="active"
            to={`/campuses/${campus.id}`}>
            <h4 className="media-heading tucked">
              <span placeholder="Jean Doe">{campus.name}</span>
            </h4>
          </NavLink>
          <div className="media-right media-middle">
            <button
              className="btn btn-default"
              onClick={this.removeCampusCallback}>
              <span className="glyphicon glyphicon-remove" />
            </button>
          </div>
        </div>
      </div>
    )
  }
  removeCampusCallback (event) {
    const { campus } = this.props;
    event.stopPropagation();
    console.log('wwoo', this.props.removeCampus)
    this.props.removeCampus(campus.id)
  }
}

const mapState = function(state) {
  return {
    campuses: state.campuses
  }
}

const mapDispatch = function(dispatch){
  return {
    removeCampus: function(id) {
      return dispatch(removeCampus(id))
    }
  }
};

export default connect(mapState, mapDispatch)(CampusItem);
