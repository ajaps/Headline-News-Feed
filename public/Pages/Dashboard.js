import React from 'react';

import Footer from '../component/Footer';
import Header from '../component/Header';

export default class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = { title: 'Ajaps Franklin that BOSS!!'};
  }

  logout() {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      alert(error);
    });
  }

  changeTitle(title) {
    this.setState({ title });
  }

  render() {
    return (
      <div>
        <Header />
        <button onClick={this.logout}>SignOut </button>
        <Footer />
      </div>
    );
  }
}
