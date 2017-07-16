import PropTypes from 'prop-types';
import React from 'react';
import Source from '../components/Source.jsx';
/**
 * Represents Source template.
 */
export default class Sources extends React.Component {
  constructor(props) {
    super(props);
    this.searchSource = this.searchSource.bind(this);
    this.state = { searchTerm: '' };
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
 * @returns {component} A component with relevant source.
 */
  render() {
    const sources = this.props.sources;
    const searchQuery = this.state.searchTerm;
    const sourcesComponents = sources.map((sourcesItem) => {
      const reg = RegExp(searchQuery, 'gi');
      if ((sourcesItem.name.search(reg) !== -1)) {
        return (
          <Source
              activeSource={this.props.sourceSelected}
              key={sourcesItem.id}
              source={sourcesItem}
          />
        );
      }
    });

    return (
      sourcesComponents.length < 1 ?
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

Sources.propTypes = {
  sourceSelected: PropTypes.string,
  sources: PropTypes.array,
};
