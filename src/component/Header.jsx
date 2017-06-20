import React from 'react';
import PropTypes from 'prop-types';

/**
 * Represents the Header section, contains language preference and logout button
 */
export default class Header extends React.Component {

/**
* sends language selection to props
* @param {String} lang The preffered language.
* @returns {void}
*/
  setLanguage(lang) {
    this.props.setLan(lang);
  }

  /**
  * @returns {component} A component with Header details like language and sign out functionality.
  */
  render() {
    const allLanguage = this.props.allLanguage;
    // iterate through Language object
    const languageComponent = allLanguage.map((languageItem) => {
      const key = languageItem.key;
      return <li key={key}><a onClick={this.setLanguage.bind(this, languageItem.key)}>
      {languageItem.text}</a></li>;
    });

    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">Headlines RSS Feed</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              {languageComponent}
              <li><a onClick={this.props.logout} id="logoutBtn">Logout</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  logout: PropTypes.func,
};
