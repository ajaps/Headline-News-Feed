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
