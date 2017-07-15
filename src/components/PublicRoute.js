import PropTypes from 'prop-types';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/**
   * checks if user is authenticated redirects to dashbpard if true
   * @return {ReactElement}
   */
function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
        {...rest}
        render={props => authenticated === false
        ? <Component {...props} />
        : <Redirect to="/dashboard" />}
    />
  );
}
PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
};

module.exports = {
  PublicRoute,
};
