import React from 'react';
import PropTypes from 'prop-types';

import Footer from '../component/Footer.jsx';


/**
 * Represents a component Login/Home page.
 */
export default class Login extends React.Component {

/**
   * Initiates login process
   * @param {string} signInMethod - sign in provider name
   * @return {void}
   */
  signIn(signInMethod) {
    this.props.logInFirebase(signInMethod);
  }

/**
   * return component that displays home/login page
   * @return {ReactElement} Markup
   */
  render() {
    return (
      <div>
        <div>
          <h1 className="loginHeader">Headline News</h1>
        </div>
        <div id="theCarousel" className="carousel slide" data-ride="carousel">

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
        <button onClick={this.signIn.bind(this, 'github')} href="login"
          className="loginBtn btn-social btn-github"> <span className="fa fa-github" />Login with Github</button>
        <button onClick={this.signIn.bind(this, 'google+')} href="login"
          className="loginBtn loginBtn--google">Login with Google</button>
        <Footer />
      </div>
    );
  }
}

Login.propTypes = {
  logInFirebase: PropTypes.func,
};
