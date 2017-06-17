import firebase from 'firebase';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

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
  }

  /**
   * checks if user is authenticated at component mount
   * @return {void}
   */
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
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
   * @param {string} signInMethod  - represents the preffered sign in provider
   * @return {void}
   */
  signIn(signInMethod) {
    let provider;
    if (signInMethod === 'google+') {
      provider = new firebase.auth.GoogleAuthProvider();
    } else {
      provider = new firebase.auth.GithubAuthProvider();
    }
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
        <h1 /> :
        <Router>
          <Switch>
            <Route exact path="/" component={() => user ? <Redirect to="/Dashboard" /> :
              <Login logInFirebase={this.signIn.bind(this)} />} />

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
