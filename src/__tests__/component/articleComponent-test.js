import { mount, shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import ArticleComponent from '../../component/ArticleComponent';

describe('Category', () => {
  let app;
  const articleObject =
    {
      author: "Ajaps Franklin",
      title: "I'm the best",
      description: "Franklin is the best at programming...",
      url: "https://thenextweb.com/insider/2017/06/14/pornhub-piss-off-entire-internet-net-neutrality-protest/",
      urlToImage: "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/01/pornhub-logo.jpg",
      publishedAt: "2018-06-06T21:20:41Z"
    };

  it('should render as expected', () => {
    app = shallow(<ArticleComponent key={articleObject.url}{...articleObject}/>);
    const tree = toJson(app);
    expect(tree).toMatchSnapshot();
  });

  it('should have extacly one anchor element', () => {
    expect(app.find('a').length).toEqual(1);
  });

  it('should have text according to the object passed', () => {
    const result = 'I\'m the best Franklin is the best at programming...' +
    ' Ajaps Franklin June 6,   2018   22:20:41 ';
    expect(app.text()).toBe(result);
  });
});
