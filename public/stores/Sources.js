import { EventEmitter } from 'events';

import Dispatcher from '../dispatcher/HeadlineDispatcher';

class AllSources extends EventEmitter {
  constructor() {
    super();

    this.getSourceUrl = {
      language: 'en',
      category: 'all',
    };

    this.sources = [];
  }

  getNewSource() {
    let url = 'https://newsapi.org/v1/sources';
    url += `?language=${this.getSourceUrl.language}`;
    if (this.getSourceUrl.category !== 'all') {
      url += `&category=${this.getSourceUrl.category}`;
    }

  // GET news headline sources based on API
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const sources = xhr.responseText;
        this.sources = JSON.parse(sources).sources;
        this.emit('sourceChange');
      }
    };
    xhr.open('GET', url);
    xhr.send();
  }


  getAll() {
    return this.sources;
  }

  handleAction(action) {
    switch (action.type) {
      case 'GET_SOURCES':
        this.getNewSource();
        break;
      case 'SET_CATEGORY':
        this.getSourceUrl.category = action.text;
        this.getNewSource();
        break;
      case 'SET_LANGUAGE':
        this.getSourceUrl.language = action.text;
        this.getNewSource();
        break;
    }
  }
}

const SourcesStore = new AllSources();
Dispatcher.register(SourcesStore.handleAction.bind(SourcesStore));
export default SourcesStore;
