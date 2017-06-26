import { createBrowserHistory } from 'history';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import ReactLoading from 'react-loading';
import Login from './Login.jsx';
import Dashboard from './Dashboard.jsx';
import Page404 from './Page404.jsx';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import { firebaseAuth } from '../config/firebase';
import { PublicRoute } from '../components/PublicRoute';
import { PrivateRoute } from '../components/PrivateRoute';


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
    return this.state.loading === true ?
    <ReactLoading className="spinner" width="150px"
    type="spin" color="#3b5998"/> :
    (
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
