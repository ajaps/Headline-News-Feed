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
            ref={eachCategory}>{eachCategory.split('-')[0]}</a>
          </li>
        );
      }
      return null;
    });

    return (
      <nav className="navbar navbar-default categoryList">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed"
            data-toggle="collapse" data-target="#navbar" aria-expanded="false"
            aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav nav-justified">
              { filterCategoryInSource }
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

CategoryComponent.propTypes = {
  allCategory: PropTypes.array,
  currentcategory: PropTypes.array,
};
