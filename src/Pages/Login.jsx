import React from 'react';
import PropTypes from 'prop-types';

import Footer from '../component/Footer.jsx';


/**
 * Represents a component Login/Home page.
 */
export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

/**
   * Initiates login process
   * @return {void}
   */
  signIn() {
    console.log('loginCalled')
    console.log('login',this.props)
    this.props.logInFirebase();
  }

/**
   * return component that displays home/login page
   * @return {ReactElement} Markup
   */
  render() {
    return (
      <div>
        <div id="theCarousel" className="carousel slide" data-ride="carousel">

          <ol className="carousel-indicators">
            <li data-target="#theCarousel" data-slide-to="0" className="active" />
            <li data-target="#theCarousel" data-slide-to="1" />
          </ol >

          <div className="carousel-inner">
            <div className="item active" >

              <div className="slide1" />
              <div className="carousel-caption">
                <h1>Get News Headline for free</h1>
              </div>
            </div>


            <div className="item">
              <div className="slide2" />
              <div className="carousel-caption">
                <h1>Get Live Headlines</h1>
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
        <p><button onClick={this.signIn.bind(this)} href="login"
          className="loginBtn loginBtn--google">Login with Google</button></p>
        <Footer />
      </div>
    );
  }
}

Login.propTypes = {
  logInFirebase: PropTypes.func,
};
