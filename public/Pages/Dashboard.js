import React from 'react';
import {Redirect} from 'react-router-dom'
import Footer from '../component/Footer';
import Header from '../component/Header';
import Login from './Login'

export default class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = { title: 'Ajaps Franklin that BOSS!!'};
  }

  changeTitle(title) {
    this.setState({ title });
  }

  render() {
    return(
        <button onClick={this.logout}>SignOut </button>
      )
  }
  logout(){
    firebase.auth().signOut();
  }
}
