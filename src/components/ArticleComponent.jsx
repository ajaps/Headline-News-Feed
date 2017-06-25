import React from 'react';
import PropTypes from 'prop-types';
import TextTruncate from 'react-text-truncate';
import dateFormat from 'dateformat';

/**
 * Represents an Article.
 */
export default class ArticleComponent extends React.Component {

/**
 * @returns {component} A component with relevant article details.
 */
  render() {
    // change custom date to a more readable date
    const articlePublishDate = new Date(this.props.publishedAt);
    const getFormateDate = dateFormat(articlePublishDate);

    return (
      <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
        <a href={this.props.url} target="_Blank" rel="noopener noreferrer">
          <div className="thumbnail well text-center">
            <img src={this.props.urlToImage} alt="..." />
            <div className="caption">
              <p className="title">{this.props.title} </p>
              <div className="article-description ">
                <TextTruncate
                  line={2}
                  truncateText="....."
                  text={this.props.description}
                  />
              </div>
              <p className="publishedAt">{getFormateDate} </p>
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
  publishedAt: PropTypes.string.isRequired,
};
