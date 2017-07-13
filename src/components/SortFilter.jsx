import React from 'react';
import PropTypes from 'prop-types';
import * as myActions from '../actions/Headlines';

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
    const SourceId = ArticleStore.getSourceId();
    myActions.setApiSortBy(SourceId, sortBy);
  }

  render() {
    const articleSortFilters = this.props.sortFilter;
    let allAvailableSortFilter;

    if (articleSortFilters) {
      allAvailableSortFilter = articleSortFilters.map(eachSortItem =>
        <li className={eachSortItem} key={eachSortItem}>
          <a data-sort={eachSortItem} onClick={this.bySort} ref={eachSortItem}>
            { eachSortItem } </a>
        </li>
      );
    }

    return (
      <div className="container">
          <div className="dropdown pull-right sortByFeature">
            <a aria-expanded="false" aria-haspopup="true"
                className="dropdown-toggle" data-toggle="dropdown" role="button"
            > Sort Articles By
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
