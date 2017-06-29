import Dispatcher from '../dispatcher/HeadlineDispatcher';
import getNewsData from '../api/NewsApi';
import { login } from '../config/authentication';

/**
* Gets Sources from News API using the url built from the params
* @param {String} url The url for all sources.
* @returns {void}
*/
const fetchSources = (url) => {
  const newUrl = url.URL_SOURCE;
  // calls class with url to 'fetch' data from API
  getNewsData.getData(newUrl)
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
* Gets Sources from News API using the url built from the params
* @param {object} url An object containing the building blocks for the API url
* @param {String} category The category selected.
* @returns {void}
*/
const setCategory = (url, category) => {
  // Builds the url necessary to get relevant data from API
  url.category = category;
  let newUrl = url.URL_SOURCE;
  if (url.category !== 'all') {
    newUrl += `&category=${url.category}`;
  }
  // calls class with url to 'fetch' data from API
  getNewsData.getData(newUrl)
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
* Gets Articles from News API using the url built from the params
* @param {String} url An object containing the building blocks for the API url
* @param {String} sortValue The sort value selected.
* @returns {void}
*/
const sortBy = (url, sortValue) => {
  // Builds the url necessary to get relevant data from API
  url.sortBy = sortValue;
  let newUrl = `${url.URL_ARTICLES}?source=${url.source}`;
  if (url.sortBy) {
    newUrl += `&sortBy=${url.sortBy}&apiKey=${url.API_KEY}`;
  } else {
    newUrl += `&apiKey=${url.API_KEY}`;
  }
  // calls class with url to 'fetch' data from API
  getNewsData.getData(newUrl)
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
* @param {String} url An object containing the building blocks for the API url
* @param {String} source The source id
*@param {String} sortAvailable The sort available for the source
* @returns {void}
*/
const fetchArticles = (url, source, sortAvailable) => {
  // Builds the url necessary to get relevant data from API
  const newUrl = `${url.URL_ARTICLES}?source=${source}&apiKey=${url.API_KEY}`;
  // calls class with url to 'fetch' data from API
  getNewsData.getData(newUrl)
  .then((data) => {
    Dispatcher.dispatch({
      type: 'GOT_NEW_ARTICLES',
      text: source,
      sort: sortAvailable,
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
  setCategory,
  sortBy,
  fetchArticles,
  firebaseLogIn,
};
