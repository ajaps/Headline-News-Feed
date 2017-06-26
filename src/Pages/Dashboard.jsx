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
    this.errorFetchingSources = this.errorFetchingSources.bind(this);

    // Sets state with the available data in the store
    this.state = {
      articles: ArticlesStore.getAllArticles(),
      sources: SourcesStore.getAllSources(),
      sortFilter: ArticlesStore.getAvailableSorts(),
      searchTerm: '',
      CurrentCategory: SourcesStore.getCurrentCategory(),
      userSelectedSource: ArticlesStore.getSelectedSourceID(),
      sourcesError: SourcesStore.getErrorMsg(),
    };
  }

  componentWillMount() {
    this.fetchSources();
    SourcesStore.on('sourceChange', this.showArticlesOnFirstLoad);
    SourcesStore.on('error_in_sources', this.errorFetchingSources);
    ArticlesStore.on('articleChange', this.fetchArticles);
  }

  componentWillUnmount() {
    SourcesStore.removeListener('sourceChange', this.showArticlesOnFirstLoad);
    SourcesStore.removeListener('error_in_sources', this.errorFetchingSources);
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
      userSelectedSource: SourcesStore.firstSourceInArray,
    });
    myActions.fetchArticles(ArticlesStore.getArticleUrl,
      this.state.sources[0].id, this.state.sources[0].sortBysAvailable);
  }

  errorFetchingSources() {
    this.setState({
      sourcesError: SourcesStore.getErrorMsg(),
    });
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
      userSelectedSource: ArticlesStore.getSelectedSourceID(),
    });
  }

  /**
   * gets sources at initial page load
   * @return {void}
   */
  fetchSources() {
    myActions.fetchSources(SourcesStore.getSourceUrl);
  }

  render() {
    const { articles, sources } = this.state;
    const error = this.state.sourcesError;
    const sourceSelected = this.state.userSelectedSource;
    return (
      <div>
        <Navbar category={this.state.CurrentCategory} />
        <SortFilter sortFilter={this.state.sortFilter} />
        <div className="row articlesSourcesContainer">
          <SourcesComponent sources={sources} error={error}
          sourceSelected={sourceSelected} />
          <ArticleComponent articles={articles} error={error} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
