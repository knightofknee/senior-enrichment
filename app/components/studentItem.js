import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { removeStudent } from '../reducers/students';

class StudentItem extends Component {

  constructor (props){
    super(props)
    this.removeStudentCallback = this.removeStudentCallback.bind(this)
   // this.setStatestate({campus: this.props.campus })
  }

  render() {
    const { student, campuses } = this.props

    let studentCampus = (campuses.find((campus) => {
      return (campus.id === student.campusId)}))
      if (!studentCampus) studentCampus = {id: 1}
    return (
      <div className="list-group-item min-content user-item">
        <div className="media">
          <div className="media-left media-middle icon-container">
            {/* <img className="media-object img-circle" src={user.photo} /> */}
          </div>
          <NavLink
            className="media-body"
            activeClassName="active"
            to={`/students/${student.id}`}>
            <h4 className="media-heading tucked">
              <span placeholder="Jean Doe">{student.name}</span>
            </h4>
          </NavLink>
          <NavLink
            className="media-body"
            activeClassName="active"
            to={`/campuses/${studentCampus.id}`}>
            <h4 className="media-heading tucked">
              <span placeholder="Jean Doe">{studentCampus.name}</span>
            </h4>
          </NavLink>
          <div className="media-right media-middle">
            <button
              className="btn btn-default"
              onClick={this.removeStudentCallback}>
              <span className="glyphicon glyphicon-remove" />
            </button>
          </div>
        </div>
      </div>
    )
  }
  removeStudentCallback (event) {
    const { student } = this.props;
    event.stopPropagation();
    console.log('wwoo', this.props.removeStudent)
    this.props.removeStudent(student.id)
  }
}

const mapState = function(state) {
  return {
    students: state.students,
    campuses: state.campuses
  }
}

const mapDispatch = function(dispatch){
  return {
    removeStudent: function(id) {
      return dispatch(removeStudent(id))
    }
  }
};

export default connect(mapState, mapDispatch)(StudentItem);
