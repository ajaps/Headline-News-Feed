import React from 'react';
import PropTypes from 'prop-types';

export default class ArticleComponent extends React.Component {

  render() {
    // Template for each Article
    return (
      <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
        <a href={this.props.url} target="_Blank" rel="noopener noreferrer">
          <div className="thumbnail well text-center">
            <img src={this.props.urlToImage} alt="..." />
            <div className="caption">
              <p className="title">{this.props.title} </p>
              <p className="description">{this.props.description} </p>
              <p className="author">{this.props.author} </p>
              <p className="publishedAt">{this.props.publishedAt} </p>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

ArticleComponent.propTypes = {
  url: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
};
