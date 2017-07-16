import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import * as myActions from '../actions/Headlines';
/**
 * Represents Source template.
 */
export default class Source extends React.Component {
  constructor(props) {
    super(props);
    this.sourceItem = this.props.source;
    this.setSources = this.setSources.bind(this, this.sourceItem);
  }

/**
 * calls an action to set sources url and available sorting filter for articles
 * @param {Object} e The calling object property
 * @return {void}
 */
  setSources(sourceData) {
    const articleData = { id: sourceData.id,
      sortBysAvailable: sourceData.sortBysAvailable };
    myActions.fetchArticles(articleData);
  }

/**
 * @returns {component} A component with relevant source.
 */
  render() {
    const activeSource = this.props.activeSource;
    const btnClass = classNames({
      sourceBorder: activeSource === this.sourceItem.id,
    });
    return (
      <li className={btnClass}>
        <a onClick={this.setSources} ref="setSource">
          {this.sourceItem.name}
        </a>
      </li>
    );
  }
}

Source.propTypes = {
  activeSource: PropTypes.string,
  source: PropTypes.object,
};
