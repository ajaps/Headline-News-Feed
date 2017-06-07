import React from 'react';
import PropTypes from 'prop-types';

import * as myActions from '../actions/HeadlineActions';


// Component containing language preference and logout button
export default class Header extends React.Component {

  setLanguage(lang) {
    myActions.setLanguage(lang);
  }

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="/">Headlines RSS Feed</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><a cursor="pointer" onClick={this.setLanguage.bind(this, 'en')}>English</a></li>
              <li><a className="link_cursor" onClick={this.setLanguage.bind(this, 'de')}>German</a></li>
              <li><a className="link_cursor" onClick={this.setLanguage.bind(this, 'fr')}>French</a></li>
              <li><a onClick={this.props.logout} id="logoutBtn">Logout</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  logout: PropTypes.func.isRequired,
};
