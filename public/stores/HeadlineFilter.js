import { EventEmitter } from 'events';

import Dispatcher from '../dispatcher/HeadlineDispatcher';

class Url extends EventEmitter {
  constructor() {
    super();
    this.headlineUrl = {
      language: 'en',
      sortBy: 'top',
      category: 'all',
      source: 'all',
    };
  }

  setFilter(type, headlineKey, headineValue) {
    if (type === 'SOURCE') {
      this.headlineUrl[headlineKey] = headineValue;
      this.headlineUrl.source = 'all';
      this.emit('sourceUrlChanged');
    }
    else if (type === 'ARTICLE') {
      this.headlineUrl[headlineKey] = headineValue;
      this.emit('articleUrlChanged');
    }
  }

  handleActions(action) {
    switch (action.type) {
      case 'SET_LANGUAGE':
        this.setFilter('SOURCE', 'language', action.text);
        break;
      case 'SET_CATEGORY':
        this.setFilter('SOURCE', 'category', action.text);
        break;
      case 'SET_SORTBY':
        this.setFilter('ARTICLE', 'sortBy', action.text);
        break;
      case 'SET_SOURCE':
        this.setFilter('ARTICLE', 'source', action.text);
    }
  }

  getUrl() {
    return this.headlineUrl;
  }
}

const filterStore = new Url;
Dispatcher.register(filterStore.handleActions.bind(filterStore));
export default filterStore;
