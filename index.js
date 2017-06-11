require('dotenv').config();
// import firebase from 'firebase';
const config = require('./public/firebaseConfig');
const express = require('express');
const path = require('path');

const app = express();

console.log(config);

app.set('port', process.env.PORT);
app.use(express.static(path.join(__dirname, 'public')));

// app.get('*', function (request, response){
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app;
