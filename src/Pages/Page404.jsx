import React from 'react';
import PropTypes from 'prop-types';

import Footer from '../component/Footer.jsx';


/**
 * Represents a component 404 page.
 */
export default class page404 extends React.Component {

/**
   * return component that displays 404 page
   * @return {ReactElement} Markup
   */
  render() {
    return (
      <div>
        <h1>PAGE NOT FOUND </h1>
        <h3> You are reaching this page because the requested page cannot be found</h3>
        <h3> or it has been moved</h3>
        <h5><a href="/">Go to Home Page</a></h5>
        <Footer />
      </div>
    );
  }
}
