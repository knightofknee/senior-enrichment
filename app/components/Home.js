import React, {Component} from 'react'
import { connect } from 'react-redux';
import { addCampus } from '../reducers/campuses';
import CampusItem from './campusItem'

class Home extends Component {

  constructor(props){
    super(props)
  }


  render() {
    return (
      <div>
        <h1>home page yo </h1>
        <div>
          {
            this.props.campuses
              .map(campus => <CampusItem campus={campus} key={campus.id} />)
          }
         </div>
      </div>
    )
  }
}

const mapState = ({ campuses, students }) => ({ campuses, students });

const mapDispatch = { addCampus };

export default connect(mapState, mapDispatch)(Home);
