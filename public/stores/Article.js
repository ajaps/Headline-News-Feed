import { EventEmitter } from 'events';

import Dispatcher from '../dispatcher/HeadlineDispatcher';


class AllArticle extends EventEmitter {
  constructor() {
    super();

    this.getArticleUrl = {
      sortBy: 'top',
      source: 'all',
    };

    this.sortAvailable = [];

    this.article = [];
  }

  // Returns all articles
  getAll() {
    return this.article;
  }

  // Return Available Sort filter
  getSortAvailable() {
    if (!this.sortAvailable) {
      return ['unavailable'];
    }
    return this.sortAvailable;
  }

  getArticle() {
    const API_KEY = { KEY: '213327409d384371851777e7c7f78dfe' };
    let url = 'https://newsapi.org/v1/articles';
    url += `?source=${this.getArticleUrl.source}`;

    if (this.getArticleUrl.source !== 'all' && this.getArticleUrl.sortBy !== 'all') {
      url += `&sortBy=${this.getArticleUrl.sortBy}`;
    }

    url += `&apiKey=${API_KEY.KEY}`;

    // GET news headline sources based on API
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const sources = xhr.responseText;
        this.article = JSON.parse(sources).articles;
        this.emit('articleChange');
      }
    };
    xhr.open('GET', url);
    xhr.send();
  }

  handleAction(action) {
    switch (action.type) {
      case 'GET_ARTICLES':
        this.getArticle();
        break;
      case 'SET_SOURCE':
        this.getArticleUrl.source = action.text;
        this.sortAvailable = action.sort;
        this.getArticle();
        break;
      case 'SET_SORTBY':
        this.getArticleUrl.sortBy = action.text;
        this.getArticle();
        break;
      case 'SET_CATEGORY':
        this.getArticleUrl.sortBy = 'all';
        this.article = [];
        this.emit('articleChange');
        break;
      case 'SET_LANGUAGE':
        this.article = [];
        this.getArticleUrl.sortBy = 'all';
        this.emit('articleChange');
        break;
    }
  }
}

const ArticleStore = new AllArticle();
Dispatcher.register(ArticleStore.handleAction.bind(ArticleStore));
window.Dispatcher = Dispatcher;
export default ArticleStore;
