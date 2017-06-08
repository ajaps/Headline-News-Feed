import Dispatcher from '../dispatcher/HeadlineDispatcher';

/**
* sends an action to dispacth to get new sources
* @returns {void}
*/
export function getNewSources() {
  Dispatcher.dispatch({
    type: 'GET_SOURCES',
  });
}

/**
* sends an action to dispacth to get new Articles
* @returns {void}
*/
export function getNewArticles() {
  Dispatcher.dispatch({
    type: 'GET_ARTICLES',
  });
}

/**
* sends an action to dispacth to set preffered language
* @param {String} language The preffered language.
* @returns {void}
*/
export function setLanguage(language) {
  Dispatcher.dispatch({
    type: 'SET_LANGUAGE',
    text: language,
  });
}

/**
* sends an action to dispacth to set category
* @param {String} category The category selected.
* @returns {void}
*/
export function setCategory(category) {
  Dispatcher.dispatch({
    type: 'SET_CATEGORY',
    text: category,
  });
}

/**
* sends an action to dispacth to set filter
* @param {String} sortValue The sort value selected.
* @returns {void}
*/
export function sortBy(sortValue) {
  Dispatcher.dispatch({
    type: 'SET_SORTBY',
    text: sortValue,
  });
}

/**
* sends an action to dispacth to set the url for the API
* @param {String} source The source id
*@param {String} sortAvailable The sort available for the source
* @returns {void}
*/
export function getArticles(source, sortAvailable) {
  Dispatcher.dispatch({
    type: 'SET_SOURCE',
    text: source,
    sort: sortAvailable,
  });
}
