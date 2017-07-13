import React from 'react';

import CategoryComponent from '../components/Category.jsx';
import SortFilter from '../components/SortFilter.jsx';

import ArticleComponent from '../components/Article.jsx';
import SourcesComponent from '../components/Sources.jsx';

import ArticlesStore from '../stores/Articles';
import SourcesStore from '../stores/Sources';

import * as myActions from '../actions/HeadlineActions';

/**
 * Represents the parent component for all
 * components when the user is authenticated.
 */
class Dashboard extends React.Component {
  constructor() {
    super();
    this.showArticlesOnFirstLoad = this.showArticlesOnFirstLoad.bind(this);
    this.fetchArticles = this.fetchArticles.bind(this);

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
      userSelectedSource: SourcesStore.firstSourceInArray,
      allCategories: SourcesStore.getAllCategory(),
      sourcesError: SourcesStore.getErrorMsg(),
    });
    if (this.state.sources.length > 0) {
      myActions.fetchArticles(ArticlesStore.getArticleUrl,
      this.state.sources[0]);
    }
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
          <div >
            <SourcesComponent sources={sources} error={sourceError}
            sourceSelected={sourceSelected} />
          </div>
          <div>
            <ArticleComponent articles={articles} error={articlesError} />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
