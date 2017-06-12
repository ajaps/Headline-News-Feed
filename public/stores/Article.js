import { EventEmitter } from 'events';

import Dispatcher from '../dispatcher/HeadlineDispatcher';


class AllArticle extends EventEmitter {
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

  // Returns all articles
  getAll() {
    return this.article;
  }

  // Return Available Sort filter
  getSortAvailable() {
    return this.sortAvailable;
  }

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
