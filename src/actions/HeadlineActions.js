import Dispatcher from '../dispatcher/HeadlineDispatcher';
import getNewsData from '../apiFolder/NewsApi';

/**
* Gets Sources from News API using the url built from the params
* @param {object} url An object containing the building blocks for the API url
* @param {String} language The preffered language.
* @returns {void}
*/
const setLanguage = (url, language) => {
  // Builds the url necessary to get relevant data from API
  url.language = language;
  const newUrl = `${url.URL_SOURCE}?language=${language}`;
  // calls class with url to 'fetch' data from API
  getNewsData.getData(newUrl)
  .then((data) => {
    Dispatcher.dispatch({
      type: 'SET_LANGUAGE',
      text: language,
      response: data.status,
      sources: data.sources,
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
  let newUrl = `${url.URL_SOURCE}?language=${url.language}`;
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
const getArticles = (url, source, sortAvailable) => {
  // Builds the url necessary to get relevant data from API
  // url.source = source;
  const newUrl = `${url.URL_ARTICLES}?source=${source}&apiKey=${url.API_KEY}`;
  // calls class with url to 'fetch' data from API
  getNewsData.getData(newUrl)
  .then((data) => {
    Dispatcher.dispatch({
      type: 'SET_SOURCE',
      text: source,
      sort: sortAvailable,
      response: data.status,
      articles: data.articles,
    });
  });
};

module.exports = {
  setLanguage,
  setCategory,
  sortBy,
  getArticles,
};
