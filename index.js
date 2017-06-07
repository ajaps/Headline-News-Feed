/*
import express from 'express';
import path from 'path';
*/
const express = require('express');
const path = require('path')
const app = express();

//app.set('port', (process.env.PORT));
app.set('port', '3000');
app.use(express.static(path.join(__dirname, 'public')));

// app.get('*', function (request, response){
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app;
