import React from 'react';

import * as myActions from '../actions/HeadlineActions';

export default class Navbar extends React.Component {

  // Calls the set Category function
  setCategory(category) {
    myActions.setCategory(category);
  }

  // Calls the Sort By Action
  bySort(sortValue) {
    myActions.sortBy(sortValue);
  }

// component containing justified center nav bar (the second nav bar)
  render() {
    return (
      <div className=" container navbar2">
        <div className="masthead">
          <h3 className="text-muted">Category</h3>
          <nav>
            <ul className="nav nav-justified">
              <li className="active"><a onClick={this.setCategory.bind(this, 'all')}>ALL</a></li>
              <li><a onClick={this.setCategory.bind(this, 'business')}>Business</a></li>
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
              <li><a onClick={this.bySort.bind(this, 'top')}>Top</a></li>
              <li><a onClick={this.bySort.bind(this, 'latest')}>Latest</a></li>
              <li><a onClick={this.bySort.bind(this, 'popular')}>Popular</a></li>
            </ul>
          </li>
        </div>
      </div>
    );
  }
}
