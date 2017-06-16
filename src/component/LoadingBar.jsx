import React from 'react';
import Spinner from 'react-spinner-material';
/**
 * Represents the Footer section.
 */
export default class LoadingBar extends React.Component {
  /**
 * @returns {component} A component with Footer details.
 */
  render() {
    return (
    <div className="loadingBar">
      <Spinner width={300} height={320} spinnerColor={'blue'} spinnerWidth={4}
              show={true} />
    </div>
    );
  }
}


