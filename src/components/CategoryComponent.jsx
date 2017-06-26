import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import SourcesStore from '../stores/Sources';
import * as myActions from '../actions/HeadlineActions';
/**
 * Represents a Source.
 */
export default class CategoryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.setCategory = this.setCategory.bind(this, props.id);
  }


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
    // sets class name based on user source selection
    const btnClass = classNames({
      active: this.props.category[0] === this.props.id,
    });

    return (
      <li className={btnClass}>
        <a onClick={this.setCategory}>
          {this.props.name}
        </a>
      </li>
    );
  }
}

CategoryComponent.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.array,
  id: PropTypes.string.isRequired,
};

CategoryComponent.defaultProps = {
  name: '',
  category: [],
};
