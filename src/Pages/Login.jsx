import React from 'react';
import PropTypes from 'prop-types';
import AlertContainer from 'react-alert';

import { login } from '../config/authentication';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';


/**
 * Represents a component Login/Home page.
 */
export default class Login extends React.Component {
  constructor() {
    super();
    this.state = { error: '' };
  }
/**
 * Initiates login process
 * @return {void}
 */
  handleLogin() {
    login()
    .catch((error) => {
      this.setState({ error });
    });
  }

/**
 * return component that displays home/login page
 * @return {ReactElement} Markup
 */
  render() {
    console.log(this.state);
    return (
      <div>
        <Header />
        <div id="theCarousel" className="carousel slide" data-ride="carousel">
        <h1> {this.state.error} </h1>
          <ol className="carousel-indicators">
            <li data-target="#theCarousel" data-slide-to="0" className="active" />
            <li data-target="#theCarousel" data-slide-to="1" />
          </ol >

          <div className="carousel-inner">
            <div className="item active" >

              <div className="slide1" />
              <div className="carousel-caption">
                <h1 className="caroselTitle">Get News Headline for free</h1>
              </div>
            </div>


            <div className="item">
              <div className="slide2" />
              <div className="carousel-caption">
                <h1 className="caroselTitle">Get Live Headlines</h1>
              </div>
            </div>
          </div>

          <a className="left carousel-control" href="#theCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" />
          </a>
          <a className="right carousel-control" href="#theCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" />
          </a>
        </div>
        <button name={'github'} onClick={this.handleLogin} href="login"
          className="loginBtn btn-social btn-github"> <span className="fa fa-github" />
          Login with Github</button>
        <button name={'google+'} onClick={this.handleLogin} href="login"
          className="loginBtn loginBtn--google">Login with Google</button>
      </div>
    );
  }
}

Login.propTypes = {
  logInFirebase: PropTypes.func,
};
