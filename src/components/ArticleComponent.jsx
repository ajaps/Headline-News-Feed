import dateFormat from 'dateformat';
import PropTypes from 'prop-types';
import React from 'react';
import ReactLoading from 'react-loading';
import TextTruncate from 'react-text-truncate';
import Error from '../components/ErrorComponent.jsx';

/**
 * Represents Article template.
 */
export default class ArticleComponent extends React.Component {

/**
 * @returns {component} A component with relevant article details.
 */
  render() {
    const error = this.props.error;
    const articles = this.props.articles;
    let articleComponents;

    if (error) {
      articleComponents = <Error error={error} />;
    } else if (articles) {
      articleComponents = articles.map((articleItem) => {
      // change custom date to a more readable date
        const articlePublishDate = new Date(articleItem.publishedAt);
        const getFormateDate = dateFormat(articlePublishDate);

        return (
          <div key={articleItem.url}>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
              <a href={articleItem.url}target="_Blank"rel="noopener noreferrer">
                <div className="thumbnail well text-center">
                  <img src={articleItem.urlToImage} alt="Not Available" />
                  <div className="caption">
                    <p className="title">{articleItem.title} </p>
                    <div className="article-description ">
                      <TextTruncate
                      line={3}
                      truncateText="....."
                      text={articleItem.description}
                      />
                    </div>
                    <p className="publishedAt">{getFormateDate} </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        );
      });
    }

    return error === 'loading' ?
      <div className="container well outerArticleCountainer">
        <ReactLoading className="spin" width="99px"
        type="spin" color="#3b5998"/>
      </div> :
    (
      <div className="container well outerArticleCountainer">
        <div className="row article-Container">{articleComponents} </div>
      </div>
    );
  }
}


ArticleComponent.propTypes = {
  articles: PropTypes.array,
  error: PropTypes.string,
};
