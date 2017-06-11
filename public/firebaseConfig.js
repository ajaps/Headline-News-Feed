// require('dotenv').config();

// import * as firebase from 'firebase';
// import firebase from 'firebase';

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
};

console.log(process.env.PROJECT_ID);

export default config;


/*

firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
});

*/


/*
firebase.initializeApp({
  apiKey: 'AIzaSyA57rAcrALqud4s5iR5tHj3W1dIhqGQuDQ',
  authDomain: 'headlines-rss-feed.firebaseapp.com',
  databaseURL: 'https://headlines-rss-feed.firebaseio.com',
  projectId: 'headlines-rss-feed',
  storageBucket: 'headlines-rss-feed.appspot.com',
  messagingSenderId: '843843623432',
});
*/
