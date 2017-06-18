import React from 'react';

import CategoryComponent from './CategoryComponent.jsx';
import SourcesStore from '../stores/Sources';

/**
 * Represents a navigation bar containing different categories
 */
export default class Navbar extends React.Component {

/**
 * sets initial value of sorts to unavialable
 */
  constructor() {
    super();
    this.category = SourcesStore.allCategory;
  }

/**
 * @returns {component} A component containing the nav bar with categories and sort drop-down.
 */
  render() {
    // iterate through category object
    const categoryComponent = this.category.map(categoryItem =>
    <CategoryComponent key={categoryItem.id}{...categoryItem} category={this.props.category}/>);

    return (
      <div className=" container navbar2">
        <div className="masthead">
          <h3 className="text-muted">Category</h3>
          <nav>
            <ul className="nav nav-justified">
              {categoryComponent }
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

Navbar.defaultProps = {
  sortFilter: ['unavailable'],
};
