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

import Dashboard from './Dashboard.jsx';
import Login from './Login.jsx';
import Page404 from './Page404.jsx';

/**
 * firebase configuration keys.
 */
firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
});

/**
 * Represents a component for displaying pages based on users authentication.
 */
export default class Layout extends React.Component {

  /**
   * constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);
    this.state = { url: '/Dasboard' };
    console.log('API_KEY', process.envAPI_KEY);
    console.log('AUTH_DOMAIN', process.env.AUTH_DOMAIN);
    console.log('PROJECT_ID', process.env.PROJECT_ID);
    console.log('127.0.0.1');
  }

  /**
   * checks if user is authenticated at component mount
   * @return {void}
   */
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  /**
   * sign out from firebase/application
   * @return {void}
   */
  logout() {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      this.setState({ user: null });
    }).catch((error) => {
      // An error happened.
      alert(error);
    });
  }

  /**
   * Signs in into firebase/Application
   * @return {void}
   */
  signIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
    }).catch((error) => {
      alert(error.message);
    });
  }

  /**
   * return component based on current authentication state
   * @return {ReactElement} returns react element under different authentication state
   */
  render() {
    const { user } = this.state;
    return (
      user === undefined ?
        <Spinner /> :
        <Router>
          <Switch>
            <Route exact path="/" component={() => user ? <Redirect to="/Dashboard" /> :
              <Login />} />

            <Route path="/Login" component={() => user ? <Redirect to="/Dashboard" /> :
              <Login logInFirebase={this.signIn.bind(this)} />} />

            <Route path="/Dashboard" component={() => user ? <Dashboard
              logout={this.logout.bind(this)} params={this.state} /> : <Redirect to="/Login" />} />

            <Route path = "/*" component={ () => <Page404 /> } />
          </Switch>
        </Router>
    );
  }
}
