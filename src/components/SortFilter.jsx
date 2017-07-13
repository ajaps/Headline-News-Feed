import React from 'react';
import PropTypes from 'prop-types';
import * as myActions from '../actions/HeadlineActions';

import ArticleStore from '../stores/Articles';

/**
 * Represents the Available sort filter
 */
export default class SortFilter extends React.Component {
  constructor() {
    super();
    this.bySort = this.bySort.bind(this);
  }
/**
 * sends an action to change the preffered sort filter based on user selection
 * @param {object} e The selected sort Filter
 * @return {void}
 */
  bySort(e) {
    const sortBy = e.target.dataset.sort;
    const url = ArticleStore.getArticleUrl;
    myActions.sortBy(url, sortBy);
  }

  render() {
    const articleSortFilters = this.props.sortFilter;
    let allAvailableSortFilter;

    if (articleSortFilters) {
      allAvailableSortFilter = articleSortFilters.map(eachSortItem =>
        <li className={eachSortItem} key={eachSortItem}>
          <a onClick={this.bySort} data-sort={eachSortItem} ref={eachSortItem}>
            { eachSortItem } </a>
        </li>
      );
    }

    return (
      <div className="container">
          <div className="dropdown pull-right sortByFeature">
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
  sortFilter: PropTypes.array,
};
