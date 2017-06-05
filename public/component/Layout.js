import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

import Spinner from 'react-spinner';

import Example2 from '../Pages/Example2';
import { RecursiveExample } from '../Pages/Example';
import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';
import firebase from '../firebaseConfig';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = { title: 'Ajaps Franklin that BOSS!!', url:'/Dasboard' };
  }

  componentDidMount() {
   /* firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
    */
        // AlWAYS LOGGED IN - i'm working on the Dashboard
    this.setState({ user: 'user' });
  }

  changeTitle(title) {
    this.setState({ title });
  }

  // Sign Out from Firebase/Application
  logout() {
    console.log('Signed OUT');
    this.setState({ user: null });

    firebase.auth().signOut().then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      alert(error);
    });
  }

  //To change the URL
  changeUrl(url){
    this.setState({url})
  }

  // Sign In to Firebase/Application
  signIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      let token = result.credential.accessToken;
      // The signed-in user info.
      let user = result.user;
      console.log(user);
      // ...
    }).catch((error) => {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      let email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      let credential = error.credential;
      // ...
    });
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

