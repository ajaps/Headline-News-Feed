import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import * as myActions from '../actions/HeadlineActions';
import ArticleStore from '../stores/Articles';
/**
 * Represents a Source.
 */
export default class SourcesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.setSources = this.setSources.bind(this);
  }
/**
 * calls an action to set sources url and available sorting filter for articles
 * @param {String} sources The selected source id
 * @param {String} sortAvailable The selected sort Filter
 * @return {void}
 */
  setSources() {
    const url = ArticleStore.getArticleUrl;
    myActions.fetchArticles(url, this.props.id, this.props.sortBysAvailable);
  }

/**
 * @returns {component} A component with relevant source.
 */
  render() {
    // sets class name based on user source selection using classnames module
    const btnClass = classNames({
      sourceBorder: this.props.sourceItemSelected[0] === this.props.id,
    });

    return (
      <li className={btnClass} >
        <a onClick={this.setSources}>
          {this.props.name}
        </a>
      </li>
    );
  }
}

SourcesComponent.propTypes = {
  sourceItemSelected: PropTypes.array.isRequired,
  sortBysAvailable: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
