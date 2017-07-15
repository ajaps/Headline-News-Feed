import PropTypes from 'prop-types';
import React from 'react';

const Error = props => (
    <div>
      <p> The App encoutered an error while fetching data</p><br />
      <p>Ensure you're connected to the internet and try again</p>
      <p> ERROR: {props.error} </p>
    </div>
  );

Error.propTypes = {
  error: PropTypes.string.isRequired,
};

export default Error;
