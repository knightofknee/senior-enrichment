import React, {Component} from 'react'
import { connect } from 'react-redux';
import StudentItem from './studentItem'

class CampusDisplay extends Component {
  constructor(props) {
    super(props)
    console.log('initializing CampusDisplay')
  }

  render () {
    console.log('rendering CampusDisplay')
    console.log(this.props.paramId)
    return (
      <div>
        <h3>student__________________________________________campus</h3>
        {this.props.students.map((student) => <StudentItem student={student} key={student.id} />)
        }
      </div>
    )
  }
}
const mapState = ({ campuses, students }, ownProps) => {
  const paramId = Number(ownProps.match.params.id)
  return {
    campuses,
    students,
    paramId
  }
}


// ({ campuses, students });

const mapDispatch = {  };

export default connect(mapState, mapDispatch)(CampusDisplay);
