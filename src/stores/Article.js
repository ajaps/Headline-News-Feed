import { EventEmitter } from 'events';

import Dispatcher from '../dispatcher/HeadlineDispatcher';

/**
 * Represents Article's store/data.
 */
class AllArticle extends EventEmitter {

  /**
   * sets default url for getting articles
   * @return {void}
   */
  constructor() {
    super();

    this.getArticleUrl = {
      sortBy: 'top',
      source: 'all',
      URL_ARTICLES: 'https://newsapi.org/v1/articles',
      API_KEY: '213327409d384371851777e7c7f78dfe',
    };
    this.status = 'ok';
    this.sortAvailable = ['unavailable'];

    this.article = [];
  }

  /**
   * returns Article object
   * @return {object} contains available articles in the store
   */
  getAll() {
    return this.article;
  }

  /**
   * returns available sort in the selected news source
   * @return {array} contains available filter for the selected source
   */
  getSortAvailable() {
    return this.sortAvailable;
  }

  /**
   * handles to specified action type
   * @param {Object} action - the action type and text - Articles
   * @return {void}
   */
  handleAction(action) {
    switch (action.type) {
      case 'SET_SOURCE':
        this.getArticleUrl.source = action.text;
        this.sortAvailable = action.sort;
        this.status = action.response;
        this.article = action.articles;
        this.emit('articleChange');
        break;
      case 'SET_SORTBY':
        this.getArticleUrl.sortBy = action.text;
        this.article = action.articles;
        this.status = action.response;
        this.emit('articleChange');
        break;
    }
  }
}

const ArticleStore = new AllArticle();
Dispatcher.register(ArticleStore.handleAction.bind(ArticleStore));
export default ArticleStore;
