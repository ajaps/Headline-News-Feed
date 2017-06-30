import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ReactLoading from 'react-loading';
import * as myActions from '../actions/HeadlineActions';
import ArticleStore from '../stores/Articles';
import Error from '../components/ErrorComponent.jsx';
/**
 * Represents Source template.
 */
export default class SourcesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.setSources = this.setSources.bind(this);
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
 * calls an action to set sources url and available sorting filter for articles
 * @param {Object} e The calling object property
 * @return {void}
 */
  setSources(e) {
    const sort = e.target.dataset.sort.split(',');
    const url = ArticleStore.getArticleUrl;
    const articleData = { id: e.target.dataset.id, sortBysAvailable: sort };
    myActions.fetchArticles(url, articleData);
  }

/**
 * @returns {component} A component with relevant source.
 */
  render() {
    const error = this.props.error;
    const sources = this.props.sources;
    let sourcesComponents;

    // If an error was encountered while gettin data via the API
    if (error) {
      sourcesComponents = <Error error={error} />;
    } else {
      // Search through sources, return all if search term is empty('')
      sourcesComponents = sources.map((sourcesItem) => {
        // sets class name based on user source selection - classnames module
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
    }

    return (
      error === 'loading' ?
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
  sourceSelected: PropTypes.string,
  error: PropTypes.string,
  sources: PropTypes.array,
};
