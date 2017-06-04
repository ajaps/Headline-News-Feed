import React from 'react';

export default class ArticleComponent extends React.Component {
  render() {
    return (
      <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
        <div className="thumbnail well text-center">
          <img src={this.props.urlToImage} alt="..." />
          <div className="caption">
            <p className="title">{this.props.title} </p>
            <p className="description">{this.props.description} </p>
            <p className="author">{this.props.author} </p>
            <p className="publishedAt">{this.props.publishedAt} </p>
          </div>
        </div>
      </div>
    );
  }
}
