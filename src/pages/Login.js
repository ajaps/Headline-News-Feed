import React from 'react';

import { login } from '../config/authentication';

/**
 * Represents a component Login/Home page.
 */
export default class Login extends React.Component {

/**
 * Initiates login process
 * @param {object} e - the calling object information
 * @return {void}
 */
  handleLogin(e) {
    login(e.target.name);
  }

  render() {
    return (
      <div className="login-page">
        <div className="loginBackgroundImg" />
        <div className=" container-fluid all-available-login-button">
          <h2 className="loginHeader">Headline News Feed</h2>
          <button name={'github'} onClick={this.handleLogin} href="login"
            ref="githubBtn" className="loginBtn btn loginBtn--github">
            <span className="fa fa-github" />Login with Github
          </button><br />

          <button name={'google+'} onClick={this.handleLogin} href="login"
            className="loginBtn btn loginBtn--google" ref="googleBtn">
            Login with Google
          </button>
        </div>
      </div>
    );
  }
}
