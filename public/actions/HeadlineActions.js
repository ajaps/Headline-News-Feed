import Dispatcher from '../dispatcher/HeadlineDispatcher';

/**
* Gets Sources from News API using the url built from the params
* @param {String} url An object containing the building blocks for the API url
* @param {String} language The preffered language.
* @returns {void}
*/
export function setLanguage(url, language) {
  url.language = language;
  const newUrl = `${url.URL_SOURCE}?language=${language}`;
  fetch(newUrl).then(response => response.json())
  .then(data => {
    Dispatcher.dispatch({
      type: 'SET_LANGUAGE',
      text: language,
      response: data.status,
      sources: data.sources,
    });
  });
}

/**
* Gets Sources from News API using the url built from the params
* @param {String} url An object containing the building blocks for the API url
* @param {String} category The category selected.
* @returns {void}
*/
export function setCategory(url, category) {
  url.category = category;
  let newUrl = `${url.URL_SOURCE}?language=${url.language}`;
  if (url.category !== 'all') {
    newUrl += `&category=${url.category}`;
  }
  fetch(newUrl).then(response => response.json())
  .then(data => {
    Dispatcher.dispatch({
      type: 'SET_CATEGORY',
      text: category,
      response: data.status,
      sources: data.sources,
    });
  });
}

/**
* Gets Articles from News API using the url built from the params
* @param {String} url An object containing the building blocks for the API url
* @param {String} sortValue The sort value selected.
* @returns {void}
*/
export function sortBy(url, sortValue) {
  url.sortBy = sortValue;
  let newUrl = `${url.URL_ARTICLES}?source=${url.source}`;
  if (url.sortBy) {
    newUrl += `&sortBy=${url.sortBy}&apiKey=${url.API_KEY}`;
  } else {
    newUrl += `&apiKey=${url.API_KEY}`;
  }
  fetch(newUrl).then(response => response.json())
  .then(data => {
    Dispatcher.dispatch({
      type: 'SET_SORTBY',
      text: sortValue,
      response: data.status,
      articles: data.articles,
    });
  });
}

/**
* Gets Articles from News API using the url built from the params
* @param {String} url An object containing the building blocks for the API url
* @param {String} source The source id
*@param {String} sortAvailable The sort available for the source
* @returns {void}
*/
export function getArticles(url, source, sortAvailable) {
  url.source = source;
  const newUrl = `${url.URL_ARTICLES}?source=${url.source}&apiKey=${url.API_KEY}`;
  fetch(newUrl).then(response => response.json())
  .then(data => {
    Dispatcher.dispatch({
      type: 'SET_SOURCE',
      text: source,
      sort: sortAvailable,
      response: data.status,
      articles: data.articles,
    });
  });
}
