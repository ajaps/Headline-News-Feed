import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';


import * as myActions from '../actions/HeadlineActions';

/**
 * Represents a navigation bar containing different categories
 */
export default class Navbar extends React.Component {

/**
 * sets initial value of sorts to unavialable
 */
  constructor() {
    super();
    this.state = {
      sortAvailable: ['unavailable'],
    };
  }

/**
 * sends an action to change category based on user selection
 * @param {String} category The selected category
 * @return {void}
 */
  setCategory(category) {
    myActions.setCategory(category);
  }

/**
 * sends an action to change the preffered sort filter based on user selection
 * @param {String} sortValue The selected sort Filter
 * @return {void}
 */
  bySort(sortValue) {
    myActions.sortBy(sortValue);
  }

/**
 * @returns {component} A component containing the nav bar with categories and sort drop-down.
 */
  render() {
    const sourceFilters = this.props.sortFilter;
    const topFilter = sourceFilters[0] ? '' : 'disabled';
    const latestFilter = sourceFilters[1] ? '' : 'disabled';
    const popularFilter = sourceFilters[2] ? '' : 'disabled';

    return (
      <div className=" container navbar2">
        <div className="masthead">
          <h3 className="text-muted">Category</h3>
          <nav>
            <ul className="nav nav-justified">
              <li className={this.all} > <Link to="/Dashboard/all" onClick={this.setCategory.bind(this, 'all')}>ALL</Link></li>
              <li className={this.business}> <Link to="/Dashboard/business" onClick={this.setCategory.bind(this, 'business')}>Business</Link></li>
              <li><a onClick={this.setCategory.bind(this, 'entertainment')}>Entertainment</a></li>
              <li><a onClick={this.setCategory.bind(this, 'gaming')}>Gaming</a></li>
              <li><a onClick={this.setCategory.bind(this, 'general')}>General</a></li>
              <li><a onClick={this.setCategory.bind(this, 'music')}>Music</a></li>
              <li><a onClick={this.setCategory.bind(this, 'politics')}>Politics</a></li>
              <li><a onClick={this.setCategory.bind(this, 'science')}>Science</a></li>
              <li><a onClick={this.setCategory.bind(this, 'sport')}>Sport</a></li>
              <li><a onClick={this.setCategory.bind(this, 'technology')}>Technology</a></li>
            </ul>
          </nav>
          <li className="dropdown sortByFeature">
            <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> Sort Articles By <span className="caret" /></a>
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

Navbar.defaultProps = {
  sortFilter: ['top'],
};
