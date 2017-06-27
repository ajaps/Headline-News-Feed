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
      category: 'all',
      URL_SOURCE: 'https://newsapi.org/v1/sources?language=en',
    };
    this.status = 'ok';
    this.sources = [];

    // All Available categories for the application
    this.allCategory = [];

    // Selected category on each click
    this.selectedCategory = ['all'];
    this.firstSourceInArray = '';

    this.sourcesErrorMsg = 'loading';
  }

  /**
   * returns Sources object
   * @return {object} contains available sources in the store
   */
  getAllSources() {
    return this.sources;
  }

 /**
   * returns Sources object
   * @return {object} contains available sources in the store
   */
  getErrorMsg() {
    return this.sourcesErrorMsg;
  }

  /**
   * returns current source url
   * @return {string} contains source url required to fetch data from API
   */
  getUrl() {
    return this.getSourceUrl;
  }

  /**
   * returns current selected category
   * @return {string} contains source url required to fetch data from API
   */
  getCurrentCategory() {
    return this.selectedCategory;
  }

/**
   * returns current selected category
   * @return {array} contains source url required to fetch data from API
   */
  getAllCategory() {
    return this.allCategory;
  }

  /**
   * handles to specified action type
   * @param {Object} action - the action type and text - Sources
   * @return {void}
   */
  handleAction(action) {
    switch (action.type) {
    case 'FETCH_SOURCES':
      this.sources = action.sources;
      this.status = action.response;
      this.firstSourceInArray = action.firstSourceInArray;
      this.allCategory = action.sources;
      this.sourcesErrorMsg = action.error;
      this.emit('sourceChange');
      break;
    case 'SET_CATEGORY':
      this.getSourceUrl.category = action.text;
      this.sources = action.sources;
      this.status = action.response;
      this.selectedCategory[0] = action.text;
      this.sourcesErrorMsg = action.error;
      this.emit('sourceChange');
      break;
    default:
      this.emit('ActionTypeNotAvailable');
    }
  }
}

const SourcesStore = new AllSources();
Dispatcher.register(SourcesStore.handleAction.bind(SourcesStore));
export default SourcesStore;
