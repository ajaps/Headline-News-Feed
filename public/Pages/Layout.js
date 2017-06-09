import firebase from 'firebase';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
} from 'react-router-dom';

import Spinner from 'react-spinner';

import Dashboard from './Dashboard';
import Login from './Login';

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
    return (
      user === undefined ?
        <Spinner /> :
        <Router>
          <Switch>
            <Route exact path="/" component={() => user ? <Redirect to="/Dashboard" /> : <Login />} />
            <Route path="/Login" component={() => user ? <Redirect to="/Dashboard" /> : <Login logInFirebase={this.signIn.bind(this)} />} />
            <Route path="/Dashboard" component={() => user ? <Dashboard changeUrl={this.changeUrl.bind(this)} logout={this.logout.bind(this)} params={this.state} /> : <Redirect to="/Login" />} />
          </Switch>
        </Router>
    );
  }
}


/*

          <Route exact path="/" component={() => user ? <Redirect to="/Dashboard" /> : <Login />} >
           <Route path="/Login" component={() => user ? <Redirect to="/Dashboard" /> : <Login logInFirebase={this.signIn.bind(this)} />} />
           <Route path="/Dashboard:/sourceid" component={() => user ? <Dashboard changeUrl={this.changeUrl.bind(this)} logout={this.logout.bind(this)} params={this.state} /> : <Redirect to="/Login" />} />
          </Route>
          */