import toJson from 'enzyme-to-json';
import * as allActions from '../../actions/HeadlineActions';

jest.mock('../../api/NewsApi', () => ({
  getData: () => Promise.resolve('getPromise')
}));

describe('Category', () => {
  let app;
  const url = 'https://newsapi.org/v1/sources?language=en';
  const source = 'bbc-sport';
  const sortAvailable = 'top, popular';
  const sortValue = null;
  const category = 'sport';
  const getArticleUrl = {
    sortBy: '',
    source: '',
    URL_ARTICLES: 'https://newsapi.org/v1/articles',
  };

  it('should call fetchArticles without error', () => {
    app = allActions.fetchArticles(url, source, sortAvailable);
    const tree = toJson(app);
    expect(tree).toMatchSnapshot();
  });

  it('should dispatch error when the async could not be resolved', () => {
    jest.mock('../../api/NewsApi', () => ({
      getData: () => Promise.error('could not fetch')
    }));
    app = allActions.fetchArticles(url, source, sortAvailable);
  });

  it('should call sortBy without error', () => {
    app = allActions.sortBy(getArticleUrl, sortValue);
  });

  it('should call setCategory without error', () => {
    app = allActions.setCategory(getArticleUrl, category);
  });
});
