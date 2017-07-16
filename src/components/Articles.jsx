
import dateFormat from 'dateformat';
import PropTypes from 'prop-types';
import React from 'react';
import ReactLoading from 'react-loading';
import Error from '../components/Error.jsx';

/**
 * Represents Article template.
 */
export default class Articles extends React.Component {

/**
 * @returns {component} A component with relevant article details.
 */
  render() {
    const error = this.props.error;
    const articles = this.props.articles;
    let articleComponents = null;

    if (error) {
      articleComponents = <Error error={error} />;
    } else if (articles) {
      articleComponents = articles.map((articleItem) => {
        const articlePublishDate = new Date(articleItem.publishedAt);
        const getFormateDate = dateFormat(articlePublishDate);

        return (
          <div key={articleItem.url}>
          <div className="row each-article">
            <div className="col-md-7 col-md-push-5">
              <a href={articleItem.url} rel="noopener noreferrer"
                  target="_Blank"
              >
              <p className="title">{articleItem.title}</p>
              </a>
              <p className="lead">{articleItem.description}</p>
              <p className="publishedAt">{getFormateDate} </p>
            </div>
            <div className="col-md-5 col-md-pull-7">
            <img alt="Not Available"
                className="featurette-image img-responsive center-block resize"
                src={articleItem.urlToImage}
            />
            </div>
          </div>
          </div>
        );
      });
    }

    return error === 'loading' ?
      <div className="outerArticleCountainer well">
        <ReactLoading
            className="spin" color="#3b5998"
            type="spin" width="99px"
        />
      </div> :
    (
      <div className="outerArticleCountainer well">
        <div className="row article-Container">{articleComponents} </div>
      </div>
    );
  }
}

Articles.propTypes = {
  articles: PropTypes.array,
  error: PropTypes.string,
};
