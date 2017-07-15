import Dispatcher from '../dispatcher/Headlines';
import getNewsData from '../api/NewsApi';
import { login } from '../config/authentication';

/**
* Gets Sources from News API
* @returns {void}
*/
const fetchSources = () => {
  getNewsData.fetchApiSources()
  .then((data) => {
    Dispatcher.dispatch({
      type: 'FETCH_SOURCES',
      response: data.status,
      sources: data.sources,
      firstSourceInArray: data.sources[0].id,
      error: null,
    });
  }).catch((error) => {
    Dispatcher.dispatch({
      type: 'FETCH_SOURCES',
      response: null,
      sources: [],
      firstSourceInArray: null,
      error: error.message,
    });
  });
};

/**
* Gets Sources from News API from the specified category
* @param {String} category the prefered category.
* @returns {void}
*/
const setApiCategory = (category) => {
  getNewsData.fetchApiSources(category)
  .then((data) => {
    Dispatcher.dispatch({
      type: 'SET_CATEGORY',
      text: category,
      response: data.status,
      sources: data.sources,
      error: null,
    });
  }).catch((error) => {
    Dispatcher.dispatch({
      type: 'SET_CATEGORY',
      text: ['all'],
      response: null,
      sources: [],
      error: error.message,
    });
  });
};

/**
* Gets Articles from using selected sourceId and sortValue
* @param {String} sourceId - the preferred source
* @param {String} sortValue The sort value selected.
* @returns {void}
*/
const setApiSortBy = (sourceId, sortValue) => {
  getNewsData.fetchApiArticles(sourceId, sortValue)
  .then((data) => {
    Dispatcher.dispatch({
      type: 'SET_SORTBY',
      text: sortValue,
      response: data.status,
      articles: data.articles,
      error: null,
    });
  }).catch((error) => {
    Dispatcher.dispatch({
      type: 'SET_SORTBY',
      text: '',
      response: null,
      articles: [],
      error: error.message,
    });
  });
};

/**
* Gets Articles from News API using the url built from the params
* @param {String} source The source id
* @returns {void}
*/
const fetchArticles = (source) => {
  getNewsData.fetchApiArticles(source.id)
  .then((data) => {
    Dispatcher.dispatch({
      type: 'GOT_NEW_ARTICLES',
      text: source.id,
      sort: source.sortBysAvailable,
      response: data.status,
      articles: data.articles,
      error: null,
    });
  }).catch((error) => {
    Dispatcher.dispatch({
      type: 'GOT_NEW_ARTICLES',
      text: '',
      sort: [],
      response: null,
      articles: [],
      error: error.message,
    });
  });
};

const firebaseLogIn = (provider) => {
  login(provider)
    .catch((error) => {
      Dispatcher.dispatch({
        type: 'LOGIN_ERROR',
        error: error.message,
      });
    });
};

module.exports = {
  fetchSources,
  setApiCategory,
  setApiSortBy,
  fetchArticles,
  firebaseLogIn,
};
