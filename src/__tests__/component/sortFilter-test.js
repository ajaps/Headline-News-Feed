import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import SortFilter from '../../components/SortFilter.jsx';

jest.mock('../../stores/Articles', () => ({
  getArticleUrl: {
    sortBy: '',
    source: 'all',
    URL_ARTICLES: 'https://newsapi.org/v1/articles',
    API_KEY: process.env.NEWS_API_KEY,
  }
}));
const myMock = jest.fn();
myMock('bySort');

describe('SortFiler', () => {
  let app;
  const filter = ['top', 'latest'];
  beforeEach(() => {
    app = shallow(<SortFilter sortFilter={filter} />);
  });

  it('should render as expected', () => {
    const tree = toJson(app);
    expect(tree).toMatchSnapshot();
  });

  it('should have dropdown children equal to length of array passed', () => {
    expect(app.find('li').length).toEqual(2);
  });
});
