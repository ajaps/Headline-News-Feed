import PropTypes from 'prop-types';
import React from 'react';

import Navbar from '../components/HeadlineNavbar.jsx';
import SortFilter from '../components/SortFilter.jsx';

import ArticleComponent from '../components/ArticleComponent.jsx';
import SourcesComponent from '../components/SourcesComponent.jsx';

import ArticlesStore from '../stores/Articles';
import SourcesStore from '../stores/Sources';

import * as myActions from '../actions/HeadlineActions';

/**
 * Represents an user's Dsiplay page.
 */
class Dashboard extends React.Component {
  constructor() {
    super();
    // calls functions to get default values from store
    this.showArticlesOnFirstLoad = this.showArticlesOnFirstLoad.bind(this);
    this.fetchArticles = this.fetchArticles.bind(this);
    this.searchSource = this.searchSource.bind(this);

    // Sets state with the available data in the store
    this.state = {
      articles: ArticlesStore.getAllArticles(),
      sources: SourcesStore.getAllSources(),
      sortFilter: ArticlesStore.getAvailableSorts(),
      searchTerm: '',
      CurrentCategory: SourcesStore.getCurrentCategory(),
      userSelectedSource: ArticlesStore.getSelectedSourceID(),
    };
  }

  componentWillMount() {
    this.fetchSources();
    SourcesStore.on('sourceChange', this.showArticlesOnFirstLoad);
    ArticlesStore.on('articleChange', this.fetchArticles);
  }

  componentWillUnmount() {
    SourcesStore.removeListener('sourceChange', this.showArticlesOnFirstLoad);
    ArticlesStore.removeListener('articleChange', this.fetchArticles);
  }

  /**
   * sets the state of the component to store values and sends the
   * first source id to generate articles on first load
   * @return {void}
   */
  showArticlesOnFirstLoad() {
    this.setState({
      sources: SourcesStore.getAllSources(),
    });
    myActions.fetchArticles(ArticlesStore.getArticleUrl,
      this.state.sources[0].id, ArticlesStore.sortAvailable);
  }

  /**
   * sets component state to the article store values and sets the filter
   * available for the source
   * @return {void}
   */
  fetchArticles() {
    this.setState({
      articles: ArticlesStore.getAllArticles(),
      sortFilter: ArticlesStore.getAvailableSorts(),
    });
  }

  /**
   * gets sources at initial page load
   * @return {void}
   */
  fetchSources() {
    myActions.fetchSources(SourcesStore.getSourceUrl);
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

  render() {
    console.log('sent to sources component', this.state.userSelectedSource);
    const { articles, sources } = this.state;

    // iterate through article object
    const articleComponents = articles.map(articleItem =>
      <ArticleComponent key={articleItem.url}{...articleItem} />);

    // Search through sources, return all if search term is empty('')
    const sourcesComponents = sources.map((sourcesItem) => {
      const reg = RegExp(this.state.searchTerm, 'gi');
      if (sourcesItem.name.search(reg) !== -1) {
        return <SourcesComponent key={sourcesItem.id}{...sourcesItem}
        sourceItemSelected={this.state.userSelectedSource}/>;
      }
      return null;
    });

    return (
      <div>
        <Navbar category={this.state.CurrentCategory} />
        <SortFilter sortFilter={this.state.sortFilter} />
        <div className="row articlesSourcesContainer">
          <div className="col-sm-3 col-md-2 sidebar well">
            <h3> News Sources </h3>
            <input type="text" className="form-control"
            placeholder="Search Sources..." onChange={this.searchSource} />
            <ul className="nav nav-sidebar Source-Container">
              {sourcesComponents}
            </ul>
          </div>
          <div className="container well outerArticleCountainer">
            <div className="row article-Container">{articleComponents} </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logout: PropTypes.func,
};

export default Dashboard;
