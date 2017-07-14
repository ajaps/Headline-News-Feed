import * as allActions from '../../actions/Headlines';

jest.mock('../../api/NewsApi', () => ({
  fetchApiSources: () => Promise.resolve({ data: 'getPromise' }),
  fetchApiArticles: () => Promise.resolve({ data: 'getPromise' }),
}));

describe('A specific action', () => {
  let app;
  const source = 'bbc-sport';
  const sortValue = null;
  const category = 'sport';

  it('should call fetchArticles method successfully', () => {
    app = allActions.fetchArticles(source);
  });

  it('should call sortBy method successfully', () => {
    app = allActions.setApiSortBy(source, sortValue);
  });

  it('should call setCategory method successfully', () => {
    app = allActions.setApiCategory(category);
  });
});
