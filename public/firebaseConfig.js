import firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyA57rAcrALqud4s5iR5tHj3W1dIhqGQuDQ',
  authDomain: 'headlines-rss-feed.firebaseapp.com',
  databaseURL: 'https://headlines-rss-feed.firebaseio.com',
  projectId: 'headlines-rss-feed',
  storageBucket: 'headlines-rss-feed.appspot.com',
  messagingSenderId: '843843623432',
});

export default firebase;
