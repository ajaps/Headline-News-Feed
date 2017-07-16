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
      <div className="well login-page ">
        <div className="col-md-9 pull-left" />
        <img className="loginBackgroundImg" />
        <div className="pull-right col-md-3 displayMsg">
          <p className="errorMsg col-md-3 ">
            <span className="warningText col-md-6">{this.state.error}</span>
          </p>
          <div className="all-available-login-button">
            <p className="loginHeader">Headline RSS Feed</p>

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
      </div>
    );
  }
}
