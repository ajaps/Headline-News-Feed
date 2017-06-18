import React from 'react';

import * as myActions from '../actions/HeadlineActions';

import ArticleStore from '../stores/Article';

/**
 * Represents a navigation bar containing different categories
 */
export default class SortFilter extends React.Component {

/**
 * sends an action to change the preffered sort filter based on user selection
 * @param {String} sortValue The selected sort Filter
 * @return {void}
 */
  bySort(sortValue) {
    const url = ArticleStore.getArticleUrl;
    myActions.sortBy(url, sortValue);
  }

/**
 * @returns {component} A component containing the nav bar with categories and sort drop-down.
 */
  render() {
    // Enable or Disable the Sort dropdown button based on available sort
    const sourceFilters = this.props.sortFilter;
    const topFilter = sourceFilters.indexOf('top') > -1 ? '' : 'disabled disableClick';
    const latestFilter = sourceFilters.indexOf('latest') > -1 ? '' : 'disabled disableClick';
    const popularFilter = sourceFilters.indexOf('popular') > -1 ? '' : 'disabled disableClick';

    return (
      <div className=" container navbar2">
        <div className="masthead">
          <li className="dropdown sortByFeature">
            <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
              aria-expanded="true"> Sort Articles By <span className="caret" /></a>
            <ul className="dropdown-menu">
              <li className={topFilter}><a onClick={this.bySort.bind(this, 'top')}>Top</a></li>
              <li className={latestFilter}><a onClick={this.bySort.bind(this, 'latest')}>Latest</a></li>
              <li className={popularFilter}><a onClick={this.bySort.bind(this, 'popular')}>Popular</a></li>
            </ul>
          </li>
        </div>
      </div>
    );
  }
}

