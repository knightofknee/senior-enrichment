const db = require('./db');
const Student = require('./db/models/student');
const Campus = require('./db/models/campus');
const User = require('./db/models/user');

const students = [
  { name: 'Bri-gui' },
];

const campuses = [
  { name: 'Carl-dom' },
  { name: 'Bri-dome' },
];

const users = [
  { name: 'bsizzle' },
];


const seed = () =>
  Promise.all(students.map(student =>
    Student.create(student))
  )
  .then(() =>
  Promise.all(campuses.map(campus =>
    Campus.create(campus))
  ))
  .then(() =>
  Promise.all(users.map(user =>
    User.create(user))
  )
);

// const main = () => {
//   console.log('Syncing db...');
//   db.sync({ force: true })
//     .then(() => {
//       console.log('Seeding databse...');
//       return seed();
//     })
//     .catch(err => {
//       console.log('Error while seeding');
//       console.log(err.stack);
//     })
//     .then(() => {
//       db.close();
//       return null;
//     });
// };

seed()
.catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })

