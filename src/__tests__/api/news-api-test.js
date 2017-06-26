import getNewsData from '../../api/NewsApi';

describe('News Api', () => {
  const url = 'https://newsapi.org/v1/sources?language=en';
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => {
      const p = new Promise((resolve) => {
        resolve('getPromise');
      });
      return p;
    });
  });

  it('should call getData without error', () => {
    const app = getNewsData.getData(url);
    expect(typeof (app)).toEqual('object');
  });
});
