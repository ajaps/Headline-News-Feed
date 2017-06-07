import { EventEmitter } from 'events';

import Dispatcher from '../dispatcher/HeadlineDispatcher';


class AllArticle extends EventEmitter {
  constructor() {
    super();

    this.getArticleUrl = {
      sortBy: 'all',
      source: 'all',
    };

    this.sortAvailable = {};
    this.article = [];
  }

  getAll() {
    return this.article;
  }

  getArticle() {
    const API_KEY = { KEY: '213327409d384371851777e7c7f78dfe' };
    let url = 'https://newsapi.org/v1/articles';
    url += `?source=${this.getArticleUrl.source}`;

    if (this.getArticleUrl.source === 'all' && this.getArticleUrl.sortBy === 'all') {
      url += `&sortBy=${this.getArticleUrl.sortBy}`;
    }

    url += `&apiKey=${API_KEY.KEY}`;

    // GET news headline sources based on API
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const sources = xhr.responseText;
        this.article = JSON.parse(sources).articles;
        console.log(this.article);
        this.emit('articleChange');
      }
    };
    xhr.open('GET', url);
    xhr.send();
    console.log(url);
  }

  handleAction(action) {
    switch (action.type) {
      case 'GET_ARTICLES':
        this.getArticle();
        break;
      case 'SET_SOURCE':
        this.getArticleUrl.source = action.text;
        this.getArticle();
        this.sortAvailable = action.sortPresent;
        console.log(action.sortPresent);
        break;
      case 'SET_SORTBY':
        this.getArticleUrl.sortBy = action.text;
        this.getArticle();
        break;
      case 'SET_CATEGORY':
        this.article = [];
        this.getArticleUrl.sortBy = 'all';
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
