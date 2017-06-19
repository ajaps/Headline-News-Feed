import React from 'react';
import classNames from 'classnames';

import * as myActions from '../actions/HeadlineActions';
import ArticleStore from '../stores/Article';
/**
 * Represents a Source.
 */
export default class SourcesComponent extends React.Component {

/**
 * calls an action to set sources url and available sorting filter for articles
 * @param {String} sources The selected source id
 * @param {String} sortAvailable The selected sort Filter
 * @return {void}
 */
  setSources(sources, sortAvailable) {
    const url = ArticleStore.getArticleUrl;
    myActions.getArticles(url, sources, sortAvailable);
  }

/**
 * @returns {component} A component with relevant source.
 */
  render() {
    // sets class name based on user source selection
    const btnClass = classNames({
      sourceBorder: this.props.sourceHigh[0] === this.props.id,
    });

    return (
      <li className={btnClass} >
        <a onClick={this.setSources.bind(this, this.props.id, this.props.sortBysAvailable)}>
          {this.props.name}
        </a>
      </li>
    );
  }
}
