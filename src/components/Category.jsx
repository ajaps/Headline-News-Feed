import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import * as myActions from '../actions/Headlines';

/**
 * Represents the Header section, contains language preference and logout button
 */
export default class Category extends React.Component {
  constructor(props) {
    super(props);
    const categoryName = this.props.category.category;
    this.setCategory = this.setCategory.bind(this, categoryName);
  }

/**
 * sends an action to change category based on user selection
 * @param {object} e The selected category
 * @return {void}
 */
  setCategory(categoryId) {
    myActions.setApiCategory(categoryId);
  }

  render() {
    const currentCategory = this.props.currentCategory;
    const categoryName = this.props.category.category;
    const btnClass = classNames({
      active: currentCategory === categoryName,
    });
    return (
      <li className={btnClass} key={categoryName}>
        <a onClick={this.setCategory}ref="category">
          {categoryName.split('-')[0]}
        </a>
      </li>
    );
  }
}

Category.propTypes = {
  currentCategory: PropTypes.string,
  category: PropTypes.object,
};
