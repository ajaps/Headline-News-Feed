import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import * as myActions from '../actions/Headlines';
/**
 * Represents Source template.
 */
export default class SourcesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.setSources = this.setSources.bind(this);
    this.searchSource = this.searchSource.bind(this);
    this.state = { searchTerm: ' ' };
  }

/**
   * sets the the searchTerm in component state to the input from the user
   * @param {Object} e The calling object property
   * @return {void}
   */
  searchSource(e) {
    const searchString = e.target.value;
    this.setState({
      searchTerm: searchString,
    });
  }

/**
 * calls an action to set sources url and available sorting filter for articles
 * @param {Object} e The calling object property
 * @return {void}
 */
  setSources(e) {
    const sort = e.target.dataset.sort.split(',');
    const articleData = { id: e.target.dataset.id, sortBysAvailable: sort };
    myActions.fetchArticles(articleData);
  }

/**
 * @returns {component} A component with relevant source.
 */
  render() {
    let sourcesFoundInSearch = 0;
    const sources = this.props.sources;

    const sourcesComponents = sources.map((sourcesItem) => {
      const btnClass = classNames({
        sourceBorder: this.props.sourceSelected === sourcesItem.id,
      });
      const reg = RegExp(this.state.searchTerm, 'gi');
      if (sourcesItem.name.search(reg) !== -1) {
        return (
            <li
                className={btnClass} key={sourcesItem.id}
            >
              <a data-id={sourcesItem.id}
                  data-sort={sourcesItem.sortBysAvailable}
                  onClick={this.setSources}
              > {sourcesItem.name} </a>
            </li>
        );
      }
      sourcesFoundInSearch += 1;
      return false;
    });
    return (
      sourcesComponents.length === sourcesFoundInSearch ?
      <div className="container pull-left outerSourceBorder">
      <div className="well sidebar-offcanvas" id="sidebar">
        <h4 className="sourcesHeader"> News Sources </h4>
        <input
            className="form-control" onChange={this.searchSource}
            placeholder="Search Sources..." type="text"
        /><br/>
        <ul className="nav nav-sidebar Source-Container">
          <p> No Source found matching the search query </p>
        </ul>
      </div>
      </div> :
      <div className="container pull-left outerSourceBorder">
      <div className="well sidebar-offcanvas" id="sidebar">
        <h4 className="sourcesHeader"> News Sources </h4>
        <input
            className="form-control" onChange={this.searchSource}
            placeholder="Search Sources..." type="text"
        /><br/>
        <ul className="nav nav-sidebar Source-Container">
          {sourcesComponents}
        </ul>
      </div>
      </div>
    );
  }
}

SourcesComponent.propTypes = {
  sourceSelected: PropTypes.string,
  error: PropTypes.string,
  sources: PropTypes.array,
};
