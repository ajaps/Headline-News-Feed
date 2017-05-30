import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, History } from 'react-router';
import Layout from './public/component/Layout';


const mountNode = document.getElementById('mountNode');
ReactDOM.render(
  <Router history={History}>
    <Route path="/" component={Layout}>
    </Route>
  </Router>,
mountNode);
