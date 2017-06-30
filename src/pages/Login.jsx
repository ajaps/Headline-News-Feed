import React from 'react';
import SourcesStore from '../stores/Sources';
import * as myActions from '../actions/HeadlineActions';
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
        <p className="alert-danger errorMsg">{this.state.error}</p>
        <div className=" container-fluid all-available-login-button">
          <h2 className="loginHeader">Headline RSS Feed</h2>
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
