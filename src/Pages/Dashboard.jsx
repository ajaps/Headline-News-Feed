import PropTypes from 'prop-types';
import React from 'react';

import Footer from '../component/Footer.jsx';
import Header from '../component/Header.jsx';
import Navbar from '../component/HeadlineNavbar.jsx';

import ArticleComponent from '../component/ArticleComponent.jsx';
import SourcesComponent from '../component/SourcesComponent.jsx';

import ArticleStore from '../stores/Article';
import SourcesStore from '../stores/Sources';

import * as myActions from '../actions/HeadlineActions';

/**
 * Represents an user's Dsiplay page.
 */
export default class Dashboard extends React.Component {

/**
 * gets sources at the first time of lauching the app
 * binds getArticles and getSources which sets the inital contents gotten from API
 * sests the initial state to mirror the new object in the stores
 * constructor
 * @param {object} props
 */
  constructor(props) {
    super(props);
    this.getSources();

    // calls functions to get default values from store
    this.setSources = this.setSources.bind(this);
    this.logout = this.logout.bind(this);
    this.setArticles = this.setArticles.bind(this);
    this.setLanguage = this.setLanguage.bind(this);
    this.searchSource = this.searchSource.bind(this);

    // Sets state with the available data in the store
    this.state = {
      article: ArticleStore.getAll(),
      sources: SourcesStore.getAll(),
      sortFilter: ArticleStore.getSortAvailable(),
      searchTerm: '',
      url: SourcesStore.getUrl(),
      language: SourcesStore.getSourceUrl.language,
    };
  }

  /**
   * binds Source and Article store to this component
   * @return {void}
   */
  componentWillMount() {
    SourcesStore.on('sourceChange', this.setSources);
    ArticleStore.on('articleChange', this.setArticles);
  }

  /**
   * unbinds Source and Article from this component to prevent memory leaks
   * @return {void}
   */
  componentWillUnmount() {
    SourcesStore.removeListener('sourceChange', this.setSources);
    ArticleStore.removeListener('articleChange', this.setArticles);
  }

  /**
  * changes language preference based on user selection
  * @param {String} lang The preffered language.
  * @returns {void}
  */
  setLanguage(lang) {
    myActions.setLanguage(this.state.url, lang);
  }

  /**
   * sets the state of the component to store values and sends the first source id to generate articles on first load
   * @return {void}
   */
  setSources() {
    this.setState({
      sources: SourcesStore.getAll(),
    });
    myActions.getArticles(ArticleStore.getArticleUrl,
      this.state.sources[0].id, ArticleStore.sortAvailable);
  }

  /**
   * sets the state of the component to store values and sets the filter available for the source
   * @return {void}
   */
  setArticles() {
    this.setState({
      article: ArticleStore.getAll(),
      sortFilter: ArticleStore.getSortAvailable(),
    });
  }

  /**
   * initiate an action to get sources based on the defualt language on first load
   * @return {void}
   */
  getSources() {
    myActions.setLanguage(SourcesStore.getSourceUrl, 'en');
  }

  /**
   * sets the an object in the state to the value of the search string
   * @param {Object} e The calling object property
   * @return {void}
   */
  searchSource(e) {
    const searchString = e.target.value;
    this.setState({
      searchTerm: searchString,
    });
  }

  /**
   * Initiates logout process
   * @return {void}
   */
  logout() {
    this.props.logout();
  }

/**
 * @returns {ReactElement} User dashboard Page.
 */
  render() {
    const { article, sources } = this.state;

    // iterate through article object
    const articleComponents = article.map(articleItem =>
      <ArticleComponent key={articleItem.url}{...articleItem} />);

    // Search through sources, return all if search term is empty
    const sourcesComponents = sources.map((sourcesItem) => {
      const reg = RegExp(this.state.searchTerm, 'gi');
      if (sourcesItem.name.search(reg) !== -1) {
        return <SourcesComponent key={sourcesItem.id}{...sourcesItem} />;
      }
    });

    // Gets all the available languages and sends to header component
    const allLanguages = SourcesStore.getAllLanguages();

    return (
      <div>
        <Header allLanguage={allLanguages} logout={this.logout} url={this.state.url.language}
          setLan={this.setLanguage}/>
        <Navbar sortFilter={this.state.sortFilter} />
        <div className="row">
          <div className="col-sm-3 col-md-2 sidebar well">
            <h3> All Sources </h3>
            <input type="text" className="form-control" placeholder="Search Sources..."
              onChange={this.searchSource} />
            <ul className="nav nav-sidebar Source-Container">
              <li className="active"><h4><span className="sr-only">
                  (current)</span></h4></li>
              {sourcesComponents}
            </ul>
          </div>
          <div className="container well articleCountainerHeight">
            <div className="row article-Container">{articleComponents} </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

Dashboard.propTypes = {
  logout: PropTypes.func,
};
