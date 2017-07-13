import React from 'react';

import CategoryComponent from '../components/Category.jsx';
import SortFilter from '../components/SortFilter.jsx';

import ArticleComponent from '../components/Article.jsx';
import SourcesComponent from '../components/Sources.jsx';

import ArticlesStore from '../stores/Articles';
import SourcesStore from '../stores/Sources';

import * as myActions from '../actions/Headlines';

/**
 * Represents the parent component for all
 * components when the user is authenticated.
 */
class Dashboard extends React.Component {
  constructor() {
    super();
    this.showArticlesOnFirstLoad = this.showArticlesOnFirstLoad.bind(this);
    this.fetchArticles = this.fetchArticles.bind(this);
    this.hideSidebar = this.hideSidebar.bind(this);

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
    this.callFetchSources();
    SourcesStore.on('sourceChange', this.showArticlesOnFirstLoad);
    ArticlesStore.on('articleChange', this.fetchArticles);
  }

  componentWillUnmount() {
    SourcesStore.removeListener('sourceChange', this.showArticlesOnFirstLoad);
    ArticlesStore.removeListener('articleChange', this.fetchArticles);
  }

  hideSidebar() {
    $('[data-toggle="offcanvas"]').click(() => {
      $('.row-offcanvas').toggleClass('active');
    });
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
   * gets sources on on first access to the application
   * @return {void}
   */
  callFetchSources() {
    myActions.fetchSources();
  }

  render() {
    const { articles, sources, allCategories, CurrentCategory } = this.state;
    const sourceError = this.state.sourcesError;
    const articlesError = this.state.articlesError;
    const sourceSelected = this.state.userSelectedSource;
    return (
      <div>
        <CategoryComponent
            allCategory={allCategories}
            currentcategory={CurrentCategory}
        />
        <p className="pull-left visible-xs">
            <button
                className="btn btn-primary btn-xs show-sources"
                data-toggle="offcanvas"
                onClick={this.hideSidebar} type="button"
            >View News Sources</button>
          </p>
        <SortFilter sortFilter={this.state.sortFilter} />
        <div className="container">
        <div className="row row-offcanvas row-offcanvas-left">
          <div >
            <SourcesComponent error={sourceError}
                sourceSelected={sourceSelected} sources={sources}
            />
          </div>
          <div className="row">
            <ArticleComponent articles={articles} error={articlesError} />
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
