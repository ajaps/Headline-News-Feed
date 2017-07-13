import React from 'react';
import SourcesStore from '../stores/Sources';
import * as myActions from '../actions/Headlines';
/**
 * Represents Login/Home component.
 */
export default class Login extends React.Component {
  constructor() {
    super();
    this.state = { error: '' };
    this.getLoginError = this.getLoginError.bind(this);
  }

  componentWillMount() {
    SourcesStore.on('loginError', this.getLoginError);
  }

  componentWillUnmount() {
    SourcesStore.on('loginError', this.getLoginError);
  }

  getLoginError() {
    this.setState({
      error: SourcesStore.getLoginErrorMessage(),
    });
  }

/**
 * Initiates login process
 * @param {object} e - the calling object information
 * @return {void}
 */
  handleLogin(e) {
    myActions.firebaseLogIn(e.target.name);
  }

  render() {
    return (
      <div className="login-page">
        <div className="loginBackgroundImg" />
        <p className="errorMsg">
          <span className="alert-danger">{this.state.error}</span>
        </p>
        <div className=" container-fluid all-available-login-button">
          <h2 className="loginHeader">Headline RSS Feed</h2>

          <button
              className="loginBtn btn loginBtn--github"
              href="login"
              name={'github'} onClick={this.handleLogin}
              ref="githubBtn"
          >
            <span className="fa fa-github" />Login with Github
          </button><br />

          <button
              className="loginBtn btn loginBtn--google" href="login"
              name={'google+'} onClick={this.handleLogin}
              ref="googleBtn"
          >
            Login with Google
          </button>
        </div>
      </div>
    );
  }
}
