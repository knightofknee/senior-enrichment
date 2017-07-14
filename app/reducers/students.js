import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const INITIALIZE = 'INITIALIZE_STUDENTS';
const CREATE     = 'CREATE_STUDENT';
const REMOVE = 'REMOVE_STUDENT';
const UPDATE     = 'UPDATE_STUDENT';

/* ------------   ACTION CREATORS     ------------------ */

const init  = students => ({ type: INITIALIZE, students });
const create = student  => ({ type: CREATE, student });
const remove = id    => ({ type: REMOVE, id });
const update = student  => ({ type: UPDATE, student });


/* ------------       REDUCER     ------------------ */

export default function reducer (students = [], action) {
  switch (action.type) {

    case INITIALIZE:
      return action.students;

    case CREATE:
      return [action.student, ...students];

    case REMOVE:
      return students.filter(student => student.id !== action.id);

    case UPDATE:
      return students.map(student => (
        action.student.id === student.id ? action.student : student
      ));

    default:
      return students;
  }
}


/* ------------   THUNK CREATORS     ------------------ */


export const fetchStudents = () => dispatch => {
  console.log('in fetch students')
  axios.get('/api/students')
       .then(res => dispatch(init(res.data)));
};

// optimistic
export const removeStudent = id => dispatch => {
  dispatch(remove(id));
  axios.delete(`/api/students/${id}`)
       .catch(err => console.error(`Removing user: ${id} unsuccesful`, err));
};

export const addStudent = student => dispatch => {
  axios.post('/api/students', student)
       .then(res => {
         console.log('adding student in student.js', res)
         dispatch(create(res.data))})
       .catch(err => console.error(`Creating student: ${student} unsuccesful`, err));
};

export const updateStudent = (id, student) => dispatch => {
  axios.put(`/api/students/${id}`, student)
       .then(res => dispatch(update(res.data)))
       .catch(err => console.error(`Updating student: ${student} unsuccesful`, err));
};
