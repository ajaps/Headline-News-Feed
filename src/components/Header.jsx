import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { logout } from '../config/authentication';

/**
 * Represents the Header section, contains language preference and logout button
 */
export default class Header extends React.Component {
  constructor() {
    super();
    this.initiateLogout = this.initiateLogout.bind(this);
  }

/**
 * Logs out from application by calling logout function in config file
 * @return {void}
 */
  initiateLogout() {
    logout();
  }

  render() {
    const showLogoutBtn = classNames({
      hidden: !(this.props.containLogoutBtn)
    });

    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">Headlines RSS Feed</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ol className="nav navbar-nav navbar-right">
              <li className={showLogoutBtn}><a className="disableClick">
                {/* {`Welcome:   ${ }`} */}
              </a></li>
              <li id="logoutBtn" className={showLogoutBtn}>
                <a onClick={this.initiateLogout}>Logout</a>
              </li>
            </ol>
          </div>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  containLogoutBtn: PropTypes.bool,
  userName: PropTypes.string
};

Header.defaultProps = {
  containLogoutBtn: false,
  userName: ''
};
