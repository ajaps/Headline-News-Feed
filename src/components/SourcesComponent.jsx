import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ReactLoading from 'react-loading';
import * as myActions from '../actions/HeadlineActions';
import ArticleStore from '../stores/Articles';
/**
 * Represents a Source.
 */
export default class SourcesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.setSources = this.setSources.bind(this);
    this.searchSource = this.searchSource.bind(this);
    this.state = { searchTerm: '' };
  }

/**
   * sets the an object in the state to the value of the search string
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
    const url = ArticleStore.getArticleUrl;
    myActions.fetchArticles(url, e.target.dataset.id, sort);
  }

/**
 * @returns {component} A component with relevant source.
 */
  render() {
    const error = this.props.error;
    console.log(error);
    const sources = this.props.sources;
     // Search through sources, return all if search term is empty('')
    const sourcesComponents = sources.map((sourcesItem) => {
      // sets class name based on user source selection using classnames module
      const btnClass = classNames({
        sourceBorder: this.props.sourceSelected === sourcesItem.id,
      });
      const reg = RegExp(this.state.searchTerm, 'gi');
      if (sourcesItem.name.search(reg) !== -1) {
        return (
          <li className={btnClass} key={sourcesItem.id}>
            <a onClick={this.setSources} data-id={sourcesItem.id}
            data-sort={sourcesItem.sortBysAvailable}> {sourcesItem.name} </a>
          </li>
        );
      }
      return null;
    });

    return (
      error ?
      <div className="col-sm-3 col-md-2 sidebar well">
        <h4 className="sourcesHeader"> News Sources </h4>
        <input type="text" className="form-control"
        placeholder="Search Sources..." onChange={this.searchSource} /><br/>
        <ul className="nav nav-sidebar Source-Container">
          <ReactLoading className="spin" type="spin" color="#3b5998"/>
        </ul>
      </div> :
      <div className="col-sm-3 col-md-2 sidebar well">
        <h4 className="sourcesHeader"> News Sources </h4>
        <input type="text" className="form-control"
        placeholder="Search Sources..." onChange={this.searchSource} /><br/>
        <ul className="nav nav-sidebar Source-Container">
          {sourcesComponents}
        </ul>
      </div>
    );
  }
}

SourcesComponent.propTypes = {
  sourceSelected: PropTypes.string.isRequired,
  error: PropTypes.string,
  sources: PropTypes.array.isRequired,
};

