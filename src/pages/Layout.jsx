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
    <ReactLoading
        className="spinner" color="#3b5998" type="spin" width="150px"
    /> :
    (
      <div>
        <Header containLogoutBtn={this.state.authenticated} user={name} />
        <section>
        <Router history={history}>
          <Switch>
            <PublicRoute
                authenticated={this.state.authenticated}
                component={Login} exact path="/"
            />

            <PublicRoute
                authenticated={this.state.authenticated}
                component={Login} path="/login"
            />

            <PrivateRoute
                authenticated={this.state.authenticated}
                component={Dashboard} exact path="/dashboard"
            />

            <Route component={PageNotFound} path="*" />
          </Switch>
        </Router>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Layout;
