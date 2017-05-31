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

   signIn(){
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      let token = result.credential.accessToken;
      // The signed-in user info.
      let user = result.user;
      console.log(user)
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorMessage)
      // The email of the user's account used.
      let email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      let credential = error.credential;
      // ...
    });
  }




  render() {
    return (
        <div>
          <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
          <h4>Login from {this.state.title} islogged IN {this.state.isLoggedIN}</h4>
          <p><button onClick = {this.signIn}>Log IN </button></p>
          <Footer />
        </div>
    );
  }
}
