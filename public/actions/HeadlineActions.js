import Dispatcher from '../dispatcher/HeadlineDispatcher';

export function getNewSources() {
  Dispatcher.dispatch({
    type: 'GET_SOURCES',
  });
}

export function getNewArticles() {
  Dispatcher.dispatch({
    type: 'GET_ARTICLES',
  });
}

export function setLanguage(language) {
  Dispatcher.dispatch({
    type: 'SET_LANGUAGE',
    text: language,
  });
}

export function setCategory(category) {
  Dispatcher.dispatch({
    type: 'SET_CATEGORY',
    text: category,
  });
}

export function sortBy(sortValue) {
  Dispatcher.dispatch({
    type: 'SET_SORTBY',
    text: sortValue,
  });
}

export function getArticles(source) {
  Dispatcher.dispatch({
    type: 'SET_SOURCE',
    text: source,
  });
}
