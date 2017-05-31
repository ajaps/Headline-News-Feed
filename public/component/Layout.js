import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import Spinner from 'react-spinner';

import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';
import firebase from '../firebaseConfig';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = { title: 'Ajaps Franklin that BOSS!!' };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  changeTitle(title) {
    this.setState({ title });
  }


  render() {
    const { user } = this.state;
    console.log('moi     ' + user);
    return (
      user === undefined ?
        <Spinner /> :
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Login">Login</Link></li>
              <li><Link to="/Dashboard">Dashboard</Link></li>
            </ul>
            <div />

            <Route exact path="/" render={() => user ? <Redirect to="/Dashboard" /> : <Login />} />
            <Route path="/Login" render={() => user ? <Redirect to="/Dashboard" /> : <Login />} />
            <Route path="/Dashboard" render={() => user ? <Dashboard /> : <Redirect to="/Login" />} />
          </div>
        </Router>
    );
  }
}
