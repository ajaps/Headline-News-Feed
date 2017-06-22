import React from 'react';

import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';

/**
 * return component that displays 404 page
 * @return {ReactElement} Markup
 */
// const Page404 = () =>
class Page404 extends React.Component {
  render() {
    return (
      <div className="page404">
        <Header />
        <h1 className="p404Header">PAGE NOT FOUND </h1>
        <h3 className="p404Body"> You are reaching here because
        the requested page cannot be found or it has been moved</h3>
        <h4 className="p404Body">Click on the link below to go back to Home page
        or click 'back' in the navigation bar to go to the previos page</h4>
        <p className="p404Link"><a href="/">Go to Home Page</a></p>

        <Footer />

      </div>
    );
  }
}
export default Page404;
