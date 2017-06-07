import React from 'react';

import * as myActions from '../actions/HeadlineActions';

export default class SourcesComponent extends React.Component {

  // Calls function to initialize actions to get Articles
  setSources(sources) {
    myActions.getArticles(sources);
  }

  render() {
    return (
      <li><a onClick={this.setSources.bind(this, this.props.id)}>{this.props.name}</a></li>
    );
  }
}
