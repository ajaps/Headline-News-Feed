import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import * as myActions from '../actions/Headlines';
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
          <li className={btnClass} key={eachCategory} >
            <a data-category={eachCategory} onClick={this.setCategory}
                ref={eachCategory}
            >{eachCategory.split('-')[0]}</a>
          </li>
        );
      }
      return null;
    });

    return (
      <nav className="navbar navbar-default categoryList">
        <div className="container-fluid">
          <div className="navbar-header">
            <button aria-controls="navbar" aria-expanded="false"
                className="navbar-toggle collapsed" data-target="#navbar"
                data-toggle="collapse" type="button"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>
          <div className="navbar-collapse collapse" id="navbar" >
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
