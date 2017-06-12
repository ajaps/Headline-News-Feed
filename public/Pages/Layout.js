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
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
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
