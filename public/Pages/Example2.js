import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import React from 'react';

const PEEPS = [
  { id: 0, name: 'Michelle', friends: [ 1, 2, 3 ] },
  { id: 1, name: 'Sean', friends: [ 0, 3 ] },
  { id: 2, name: 'Kim', friends: [ 0, 1, 3] },
  { id: 3, name: 'David', friends: [ 1, 2 ] },
];

const find = (id) => PEEPS.find(p => p.id == id);

export default class Example2 extends React.Component {
  render() {
    let { match } = this.props
    let person = find(match.params.id);
  console.log(person);

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
      </div>
    );
    }
}
