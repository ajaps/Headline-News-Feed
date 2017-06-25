import React from 'react';
import PropTypes from 'prop-types';
import * as myActions from '../actions/HeadlineActions';

import ArticleStore from '../stores/Articles';

/**
 * Represents a navigation bar containing different categories
 */
export default class SortFilter extends React.Component {
  constructor() {
    super();
    this.bySort = this.bySort.bind(this);
  }
/**
 * sends an action to change the preffered sort filter based on user selection
 * @param {String} sortValue The selected sort Filter
 * @return {void}
 */
  bySort(e) {
    const sortBy = e.target.dataset.sort;
    const url = ArticleStore.getArticleUrl;
    myActions.sortBy(url, sortBy);
  }

/**
 * @returns {component} Navbar Component housing categories and sort drop-down.
 */
  render() {
    // Enable or Disable the Sort dropdown button based on available sort
    const articleSortFilters = this.props.sortFilter;
    const allAvailableSortFilter = articleSortFilters.map(eachSortItem =>
      <li className={eachSortItem} key={eachSortItem}>
        <a onClick={this.bySort} data-sort={eachSortItem}> { eachSortItem } </a>
      </li>
    );

    return (
      <div className=" container navbar2">
          <div className="dropdown sortByFeature">
            <a className="dropdown-toggle" data-toggle="dropdown" role="button"
            aria-haspopup="true" aria-expanded="false"> Sort Articles By
            <span className="caret" /></a>
            <ul className="dropdown-menu">
              {allAvailableSortFilter}
            </ul>
          </div>
      </div>
    );
  }
}

SortFilter.propTypes = {
  sortFilter: PropTypes.array.isRequired,
};
