import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const INITIALIZE = 'INITIALIZE_CAMPUSES';
const CREATE     = 'CREATE_CAMPUS';
const REMOVE = 'REMOVE_CAMPUS';
const UPDATE     = 'UPDATE_CAMPUS';

/* ------------   ACTION CREATORS     ------------------ */

const init  = campuses => ({ type: INITIALIZE, campuses });
const create = campus  => ({ type: CREATE, campus });
const remove = id    => ({ type: REMOVE, id });
const update = campus  => ({ type: UPDATE, campus });


/* ------------       REDUCER     ------------------ */

export default function reducer (campuses = [], action) {
  switch (action.type) {

    case INITIALIZE:
      return action.campuses;

    case CREATE:
      return [action.campus, ...campuses];

    case REMOVE:
      return campuses.filter(campus => campus.id !== action.id);

    case UPDATE:
      return campuses.map(campus => (
        action.campus.id === campus.id ? action.campus : campus
      ));

    default:
      return campuses;
  }
}


/* ------------   THUNK CREATORS     ------------------ */


export const fetchCampuses = () => dispatch => {
  axios.get('/api/campuses')
       .then(res => dispatch(init(res.data)));
};

// optimistic
export const removeCampus = id => {
  return dispatch => {
    console.log('dc routesdfasdfsdaf', id)
    dispatch(remove(id));
    axios.delete(`/api/campuses/${id}`)
        .catch(err => console.error(`Removing user: ${id} unsuccesful`, err));
    }
};

export const addCampus = campus => dispatch => {
  axios.post('/api/campuses', campus)
       .then(res => {
         console.log('adding campus in campus.js', res)
         dispatch(create(res.data))})
       .catch(err => console.error(`Creating campus: ${campus} unsuccesful`, err));
};

export const updateCampus = (id, campus) => dispatch => {
  axios.put(`/api/campuses/${id}`, campus)
       .then(res => dispatch(update(res.data)))
       .catch(err => console.error(`Updating campus: ${campus} unsuccesful`, err));
};
