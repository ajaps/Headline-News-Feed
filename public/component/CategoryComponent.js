import React from 'react';

import SourcesStore from '../stores/Sources';
import * as myActions from '../actions/HeadlineActions';
/**
 * Represents a Source.
 */
export default class CategoryComponent extends React.Component {

  /**
 * sends an action to change category based on user selection
 * @param {String} category The selected category
 * @return {void}
 */
  setCategory(category) {
    const url = SourcesStore.getSourceUrl;
    myActions.setCategory(url, category);
  }

/**
 * @returns {component} A component with relevant source.
 */
  render() {
    return (
      <li>
        <a onClick={this.setCategory.bind(this, this.props.name)}>
          {this.props.name}
        </a>
      </li>
    );
  }
}
