import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


//import {Router, Route, IndexRoute, History } from 'react-router';
import Layout from './public/component/Layout';
import Login from './public/Pages/Login'
import SignUp from './public/Pages/SignUp'
import Dashboard from './public/Pages/Dashboard'


const mountNode = document.getElementById('mountNode');
ReactDOM.render(
   <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/SignUp">Sign Up</Link></li>
        <li><Link to="/Dashboard">Dashboard</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Login}/>
      <Route path="/SignUp" component={SignUp}/>
      <Route path="/Dashboard" component={Dashboard}/>
    </div>
  </Router>,
mountNode);
