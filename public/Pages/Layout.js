import firebase from 'firebase';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

import Spinner from 'react-spinner';

import Login from './Login';
import Dashboard from './Dashboard';

firebase.initializeApp({
  apiKey: 'AIzaSyA57rAcrALqud4s5iR5tHj3W1dIhqGQuDQ',
  authDomain: 'headlines-rss-feed.firebaseapp.com',
  databaseURL: 'https://headlines-rss-feed.firebaseio.com',
  projectId: 'headlines-rss-feed',
  storageBucket: 'headlines-rss-feed.appspot.com',
  messagingSenderId: '843843623432',
});

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = { url: '/Dasboard' };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  // Sign Out from Firebase/Application
  logout() {
    this.setState({ user: null });

    firebase.auth().signOut().then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      alert(error);
    });
  }

  // To change the URL
  changeUrl(url) {
    this.setState({ url });
  }

  // Sign In to Firebase/Application
  signIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
    }).catch((error) => {
      alert(error.message);
    });
  }

  render() {
    const { user } = this.state;
    console.log(this.state)
    return (
      user === undefined ?
        <Spinner /> :
        <Router>
          <div>
            <ul>
              <li hidden><Link to="/">Home</Link></li>
              <li hidden><Link to="/Login">Login</Link></li>
              <li hidden><Link to="/Dashboard">Dashboard</Link></li>
            </ul>
            <div />

            <Route exact path="/" render={() => user ? <Redirect to="/Dashboard" /> : <Login />} />
            <Route path="/Login" render={() => user ? <Redirect to="/Dashboard" /> : <Login logInFirebase={this.signIn.bind(this)} />} />
            <Route path="/Dashboard" render={() => user ? <Dashboard changeUrl={this.changeUrl.bind(this)} logout={this.logout.bind(this)} params={this.state} /> : <Redirect to="/Login" />} />
          </div>
        </Router>
    );
  }
}

