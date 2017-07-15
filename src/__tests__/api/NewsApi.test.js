import getNewsData from '../../api/NewsApi';

describe('News Api', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => {
      const p = new Promise((resolve) => {
        resolve({ data: 'getPromise' });
      });
      return p;
    });
  });

  it('should get sources when category param is missing', () => {
    const app = getNewsData.fetchApiSources();
    expect(typeof (app)).toEqual('object');
  });
  it('should get sources when category param is set', () => {
    const app = getNewsData.fetchApiSources('sport');
    expect(typeof (app)).toEqual('object');
  });

  it('should get articles when sort type param is missing', () => {
    const app = getNewsData.fetchApiArticles('bbc-sport');
    expect(typeof (app)).toEqual('object');
  });
  it('should get articles when sort type param is set', () => {
    const app = getNewsData.fetchApiArticles('bbc-sport', 'top');
    expect(typeof (app)).toEqual('object');
  });
});
