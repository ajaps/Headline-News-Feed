import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const PEEPS = [
  { id: 0, name: 'Michelle', friends: [ 1, 2, 3 ] },
  { id: 1, name: 'Sean', friends: [ 0, 3 ] },
  { id: 2, name: 'Kim', friends: [ 0, 1, 3] },
  { id: 3, name: 'David', friends: [ 1, 2 ] },
];

const find = (id) => PEEPS.find(p => p.id == id);

const RecursiveExample = () => (
  <Router>
    <Person match={{ params: { id: 0 }, url: '' }} />
  </Router>
);

const Person = ({ match }) => {
  var person = find(match.params.id);
  console.log(person);
  //console.log(PEEPS['0'].name);

  return (
    <div>
      <h3>{person.id}’s Friends</h3>
      <ul>
        {person.friends.map(id => (
          <li key={id}>
            <Link to={`${match.url}/${id}`}>
              {find(id).name}
            </Link>
          </li>
        ))}
      </ul>
      <Route path={`${match.url}/:id`} component={Person} />
    </div>
  )
}

export default RecursiveExample;
