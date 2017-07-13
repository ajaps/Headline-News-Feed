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
      <div className="container appHeader">
        <a href="/"><span className="appTitle pull-left">
          Headlines RSS Feed </span>
        </a>
        <span className="userInfo pull-right">
          <span className={showLogoutBtn}>
            <a onClick={this.initiateLogout} ref="logout">
              <span className={'logoutBtn'}>Logout</span>
            </a>
          </span>
        </span>
      </div>
    );
  }
}

Header.propTypes = {
  containLogoutBtn: PropTypes.bool,
  userName: PropTypes.string,
  user: PropTypes.string,
};

Header.defaultProps = {
  containLogoutBtn: false,
  userName: '',
  user: '',
};
