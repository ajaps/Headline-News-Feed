import React from 'react';

import Footer from '../component/Footer';
import Header from '../component/Header';


export default class Login extends React.Component {

  constructor() {
    super();
    this.state = { title: 'Ajaps Franklin that BOSS!!'};
  }

  changeTitle(title) {
    this.setState({ title });
  }

  signIn() {
    console.log(this.props)
    this.props.logInFirebase();
  }

  render() {
    console.log(this.props);
    return (
        <div>
          <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
          <h4>Login from {this.state.title} islogged IN {this.state.isLoggedIN}</h4>
          <p><button onClick={this.signIn.bind(this)}>Log IN </button></p>
          <Footer />
        </div>
    );
  }
}
