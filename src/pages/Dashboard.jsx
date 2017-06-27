import React from 'react';

import CategoryComponent from '../components/CategoryComponent.jsx';
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
    // this.errorFetchingSources = this.errorFetchingSources.bind(this);
    // this.errorFetchingArticle = this.errorFetchingArticle.bind(this);

    // Sets state with the available data in the store
    this.state = {
      articles: ArticlesStore.getAllArticles(),
      sources: SourcesStore.getAllSources(),
      sortFilter: ArticlesStore.getAvailableSorts(),
      searchTerm: '',
      CurrentCategory: SourcesStore.getCurrentCategory(),
      userSelectedSource: ArticlesStore.getSelectedSourceID(),
      sourcesError: SourcesStore.getErrorMsg(),
      articlesError: ArticlesStore.getErrorMsg(),
      allCategories: SourcesStore.getAllCategory(),
    };
  }

  componentWillMount() {
    this.fetchSources();
    SourcesStore.on('sourceChange', this.showArticlesOnFirstLoad);
    // SourcesStore.on('error_in_sources', this.errorFetchingSources);
    // ArticlesStore.on('error_in_articles', this.errorFetchingArticle);
    ArticlesStore.on('articleChange', this.fetchArticles);
  }

  componentWillUnmount() {
    SourcesStore.removeListener('sourceChange', this.showArticlesOnFirstLoad);
    // SourcesStore.removeListener('error_in_sources', this.errorFetchingSources);
    // ArticlesStore.removeListener('error_in_articles', this.errorFetchingArticle);
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
      allCategories: SourcesStore.getAllCategory(),
      sourcesError: SourcesStore.getErrorMsg(),
    });
    if (this.state.sources.length > 0) {
      myActions.fetchArticles(ArticlesStore.getArticleUrl,
      this.state.sources[0].id, this.state.sources[0].sortBysAvailable);
    }
  }

  // errorFetchingArticle() {
  //   this.setState({
  //     articlesError: ArticlesStore.getErrorMsg(),
  //   });
  // }

  // errorFetchingSources() {
  //   this.setState({
  //     sourcesError: SourcesStore.getErrorMsg(),
  //   });
  // }
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
      articlesError: ArticlesStore.getErrorMsg(),
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
    const { articles, sources, allCategories, CurrentCategory } = this.state;
    const sourceError = this.state.sourcesError;
    const articlesError = this.state.articlesError;
    const sourceSelected = this.state.userSelectedSource;
    return (
      <div>
        <CategoryComponent currentcategory={CurrentCategory}
        allCategory={allCategories} />
        <SortFilter sortFilter={this.state.sortFilter} />
        <div className="row articlesSourcesContainer">
          <SourcesComponent sources={sources} error={sourceError}
          sourceSelected={sourceSelected} />
          <ArticleComponent articles={articles} error={articlesError} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
