import { EventEmitter } from 'events';

import Dispatcher from '../dispatcher/HeadlineDispatcher';

/**
 * Represents Source's store/data.
 */
class AllSources extends EventEmitter {

  /**
   * sets default url for getting sources
   * @return {void}
   */
  constructor() {
    super();

    this.getSourceUrl = {
      language: 'en',
      category: 'all',
      URL_SOURCE: 'https://newsapi.org/v1/sources',
    };
    this.status = 'ok';
    this.sources = [];

    // All Available categories for the application
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
      { id: 'technology', name: 'Technology' },
    ];

    // Selected category on each click
    this.selectedCategory = ['all'];

    // All Available language for the application
    this.ALL_LANGUAGES = [
      { key: 'en', text: 'English' },
      { key: 'de', text: 'German' },
      { key: 'fr', text: 'French' },
    ];
  }

  /**
   * returns Sources object
   * @return {object} contains available sources in the store
   */
  getAll() {
    return this.sources;
  }

  /**
   * returns current source url
   * @return {string} contains source url required to fetch data from API
   */
  getUrl() {
    return this.getSourceUrl;
  }

  /**
   * returns current languages supported by the app
   * @return {string} contains available languages
   */
  getAllLanguages() {
    return this.ALL_LANGUAGES;
  }

  /**
   * returns current selected category
   * @return {string} contains source url required to fetch data from API
   */
  getCurrentCat() {
    return this.selectedCategory;
  }

  /**
   * handles to specified action type
   * @param {Object} action - the action type and text - Sources
   * @return {void}
   */
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
        this.selectedCategory[0] = action.text;
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
