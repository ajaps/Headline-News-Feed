import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import ArticleComponent from '../../components/ArticleComponent.jsx';

describe('Category', () => {
  let app;
  const mockArticle =
    [
      {
        author: 'Ajaps Franklin',
        title: 'Nigeria has emerged as a developed country',
        description: 'Nigeria is now one og the most developed country in the',
        url: 'https://thenextweb.com/insider/2017/06/14/pornhub-piss-off-entir',
        urlToImage: 'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files.jpg',
        publishedAt: '2018-06-06T21:20:41Z'
      },
      {
        author: 'tnude Abiola',
        title: 'A Nigerian manufactured the fastest car',
        description: 'A nigerian by the name of obinna manufactured the',
        url: 'https://bbc-news.com/insider/2017/06/14/pornhub-piss-off-entir',
        urlToImage: 'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files.jpg',
        publishedAt: '2018-07-06T21:20:41Z'
      },
    ];

  beforeEach(() => {
    app = shallow(<ArticleComponent articles={mockArticle} error={'error'}/>);
  });

  it('should render as expected', () => {
    const tree = toJson(app);
    expect(tree).toMatchSnapshot();
  });

  it('should have extacly two div element if an Error occured', () => {
    expect(app.find('div').length).toEqual(2);
  });

  it('will contain the same number of TextTruncate as the array passed', () => {
    const appNoError = shallow(<ArticleComponent articles={mockArticle} />);
    expect(appNoError.find('TextTruncate').length).toEqual(2);
  });
});
