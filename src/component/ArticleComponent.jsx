import React from 'react';
import PropTypes from 'prop-types';

/**
 * Represents an Article.
 */
export default class ArticleComponent extends React.Component {

  /**
   * @returns {String} A function that retruns a custom date
   */
  formatDate() {
    const month = ['January', 'February', 'March',
      'April', 'May', 'June', 'July', 'August', 'September',
      'October', 'November', 'December'];

    const userDate = new Date(this.props.publishedAt);
    const cDate = userDate.getDate();
    const cMonth = userDate.getMonth();
    const cYear = userDate.getFullYear();

    const cHour = userDate.getHours();
    const cMin = userDate.getMinutes();
    const cSec = userDate.getSeconds();

    const formattedDate = `${month[cMonth]} ${cDate},   ${cYear}   ${cHour}:${cMin}:${cSec}`;
    return formattedDate;
  }

/**
 * @returns {component} A component with relevant article details.
 */
  render() {
    const getFormateDate = this.formatDate();
    return (
      <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
        <a href={this.props.url} target="_Blank" rel="noopener noreferrer">
          <div className="thumbnail well text-center">
            <img src={this.props.urlToImage} alt="..." />
            <div className="caption">
              <p className="title">{this.props.title} </p>
              <p className="description">{this.props.description} </p>
              <p className="author">{this.props.author} </p>
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
  author: PropTypes.string,
  publishedAt: PropTypes.string,
};

ArticleComponent.defaultProps = {
  publishedAt: 'unknown',
  author: 'unknown',
};
