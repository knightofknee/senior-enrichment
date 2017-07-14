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
    return (
      <div>
        {this.props.students.map((student) => <StudentItem student={student} key={student.id} />)
        }
        <h1>individual campus</h1>
        <h2>yo</h2>
      </div>
    )
  }
}
const mapState = ({ campuses, students }) => ({ campuses, students });

const mapDispatch = {  };

export default connect(mapState, mapDispatch)(CampusDisplay);
