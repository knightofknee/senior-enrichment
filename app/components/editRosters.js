import React, {Component} from 'react'
import { connect } from 'react-redux';
import StudentItem from './studentItem'

class EditRosters extends Component {
  constructor(props) {
    super(props)
    console.log('initializing editrosters')
  }

  render () {
    console.log('rendering editrosters')
    return (
      <div>
        {this.props.students.map((student) => <StudentItem student={student} key={student.id} />)
        }
        <h1>edit rosters</h1>
        <h2>plssss</h2>
      </div>
    )
  }
}
const mapState = ({ campuses, students }) => ({ campuses, students });

const mapDispatch = {  };

export default connect(mapState, mapDispatch)(EditRosters);
