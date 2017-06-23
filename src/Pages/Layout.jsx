import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Login from './Login.jsx';
import Dashboard from './Dashboard.jsx';
import Page404 from './Page404.jsx';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import LoadingNotification from '../components/Loading.jsx';
import { firebaseAuth } from '../config/firebase';
import { PublicRoute, PrivateRoute } from './RoutePath';

const history = createBrowserHistory();


class Layout extends React.Component {
  constructor() {
    super();
    this.state = { authenticated: false, loading: true, };
  }

  componentDidMount() {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authenticated: true, loading: false, });
      } else {
        this.setState({ authenticated: false, loading: false, });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    return this.state.loading === true ? <LoadingNotification /> : (
        <div>
          <Header containLogoutBtn={this.state.authenticated} />
        <Router history={history}>
          <Switch>
            <PublicRoute authenticated={this.state.authenticated}
            exact path="/" component={Login} />

            <PublicRoute authenticated={this.state.authenticated}
            path="/login" component={Login} />

            <PrivateRoute authenticated={this.state.authenticated}
            path="/dashboard" component={Dashboard} />

            <Route path="*" component={Page404} />
        </Switch>
      </Router>
        <Footer />
      </div>
    );
  }
}

export default Layout;
