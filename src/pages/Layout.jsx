import { createBrowserHistory } from 'history';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import ReactLoading from 'react-loading';

import Dashboard from './Dashboard.jsx';
import firebaseAuth from '../config/firebase';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import Login from './Login.jsx';
import PageNotFound from './PageNotFound.jsx';
import { PrivateRoute } from '../components/PrivateRoute';
import { PublicRoute } from '../components/PublicRoute';


const history = createBrowserHistory();


class Layout extends React.Component {
  constructor() {
    super();
    this.state = { authenticated: false, loading: true, };
  }

  componentDidMount() {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        const name = user.displayName;
        this.setState({ authenticated: true, loading: false, user: name });
      } else {
        this.setState({ authenticated: false, loading: false, });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const name = this.state.user;
    return this.state.loading === true ?
    <ReactLoading className="spinner" width="150px"
    type="spin" color="#3b5998"/> :
    (
      <div>
        <Header containLogoutBtn={this.state.authenticated} user={name} />
        <Router history={history}>
          <Switch>
            <PublicRoute authenticated={this.state.authenticated}
            exact path="/" component={Login} />

            <PublicRoute authenticated={this.state.authenticated}
            path="/login" component={Login} />

            <PrivateRoute authenticated={this.state.authenticated}
            exact path="/dashboard" component={Dashboard} />

            <Route path="*" component={PageNotFound} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default Layout;
