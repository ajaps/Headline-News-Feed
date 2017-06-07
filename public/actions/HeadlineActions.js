import Dispatcher from '../dispatcher/HeadlineDispatcher';

//Action function to get new sources
export function getNewSources() {
  Dispatcher.dispatch({
    type: 'GET_SOURCES',
  });
}

// Action function to get new Articles
export function getNewArticles() {
  Dispatcher.dispatch({
    type: 'GET_ARTICLES',
  });
}

// Action function to set prefered Language
export function setLanguage(language) {
  Dispatcher.dispatch({
    type: 'SET_LANGUAGE',
    text: language,
  });
}

// Action to set Source Category
export function setCategory(category) {
  Dispatcher.dispatch({
    type: 'SET_CATEGORY',
    text: category,
  });
}

// Action to set Sort BY parameter
export function sortBy(sortValue) {
  Dispatcher.dispatch({
    type: 'SET_SORTBY',
    text: sortValue,
  });
}

// Action to set Source url
export function getArticles(source) {
  Dispatcher.dispatch({
    type: 'SET_SOURCE',
    text: source,
  });
}
