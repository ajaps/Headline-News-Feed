import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import * as myActions from '../actions/HeadlineActions';
import SourcesStore from '../stores/Sources';

/**
 * Represents a navigation bar containing different categories
 */
export default class CategoryComponent extends React.Component {
  constructor() {
    super();
    this.setCategory = this.setCategory.bind(this);
  }

/**
 * sends an action to change category based on user selection
 * @param {object} e The selected category
 * @return {void}
 */
  setCategory(e) {
    const selectedCategory = e.target.dataset.category;
    const url = SourcesStore.getSourceUrl;
    myActions.setCategory(url, selectedCategory);
  }

/**
 * @returns {component} A component containing the nav bar with categories
 * and sort drop-down.
 */
  render() {
    // Get all unique categories deep in the JSON object
    const categoryObj = {};
    const currentCategory = this.props.currentcategory[0];
    const allSources = this.props.allCategory;
    const filterCategoryInSource = allSources.map((categoryItem) => {
      const eachCategory = categoryItem.category;
      const btnClass = classNames({
        active: currentCategory === eachCategory,
      });
      if (!(eachCategory in categoryObj)) {
        categoryObj[eachCategory] = eachCategory;
        return (
          <li key={eachCategory} className={btnClass}>
            <a onClick={this.setCategory} data-category={eachCategory}
            ref={eachCategory}>{eachCategory}</a>
          </li>
        );
      }
      return null;
    });

    return (
      <div className=" container navbar2">
        <div className="masthead">
          <h3 className="text-muted">Category</h3>
          <nav>
            <ul className="nav nav-justified">
              { filterCategoryInSource }
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

CategoryComponent.propTypes = {
  allCategory: PropTypes.array,
  currentcategory: PropTypes.array,
};
