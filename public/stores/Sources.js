import { EventEmitter } from 'events';

import Dispatcher from '../dispatcher/HeadlineDispatcher';

class AllSources extends EventEmitter {
  constructor() {
    super();

    this.getSourceUrl = {
      language: 'en',
      category: 'all',
      URL_SOURCE: 'https://newsapi.org/v1/sources',
    };
    this.status = 'ok';
    this.sources = [];
    this.allCategory = [
      { id: 'all', name: 'All' },
      { id: 'business', name: 'Business' },
      { id: 'entertainment', name: 'Entertainment' },
      { id: 'gaming', name: 'Gaming' },
      { id: 'general', name: 'General' },
      { id: 'music', name: 'Music' },
      { id: 'politics', name: 'Politics' },
      { id: 'science', name: 'Science' },
      { id: 'sport', name: 'Sport' },
      { id: 'technology', name: 'Technology' }
    ];

    this.ALL_LANGUAGES = [
      {key: 'en', text: 'Englsih'},
      {key: 'de', text: 'German'},
      {key: 'fr', text: 'French'},
    ];
  }

  getAll() {
    return this.sources;
  }
  getUrl(){
    return this.getSourceUrl;
  }
  getAllLanguages(){
    return this.ALL_LANGUAGES;
  }
  handleAction(action) {
    switch (action.type) {
      case 'GET_SOURCES':
        this.sources = action.sources;
        this.status = action.response;
        this.emit('sourceChange');
        break;
      case 'SET_CATEGORY':
        this.getSourceUrl.category = action.text;
        this.sources = action.sources;
        this.status = action.response;
        this.emit('sourceChange');
        break;
      case 'SET_LANGUAGE':
        this.getSourceUrl.language = action.text;
        this.sources = action.sources;
        this.status = action.response;
        this.emit('sourceChange');
        break;
    }
  }
}

const SourcesStore = new AllSources();
Dispatcher.register(SourcesStore.handleAction.bind(SourcesStore));
export default SourcesStore;
