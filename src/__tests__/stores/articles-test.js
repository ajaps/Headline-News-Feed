import ArticlesStore from '../../stores/Articles';
import dispatcher from '../../dispatcher/HeadlineDispatcher';

jest.mock('../../dispatcher/HeadlineDispatcher');

describe('Articles Store', () => {
  describe('Test for FETCH_SOURCES action type in store', () => {
    let articles;
    let dispatcherMock;
    beforeEach(() => {
      dispatcherMock = dispatcher.register.mock.calls[0][0];
      articles = [
        {
          author: 'TNW Deals',
          description: 'Ask any art pro',
        },
        {
          author: 'Franklin',
          description: 'Ask any art pro',
        },
      ];
    });

    afterEach(() => {
      ArticlesStore.handleAction({ type: 'GOT_NEW_ARTICLES', articles: {} });
    });

    it('should return an empty object on first call', () => {
      expect(ArticlesStore.getAllArticles()).toEqual([]);
    });
    it('should return undefined on first call for current category', () => {
      expect(ArticlesStore.getSelectedSourceID()).toEqual(undefined);
    });

    it('should be registered to a dispatcher', () => {
      dispatcherMock({ type: 'GOT_NEW_ARTICLES', articles, });
      expect(ArticlesStore.getAllArticles()).toEqual(articles);
    });

    it('should return an updated Articles after receiving an action', () => {
      ArticlesStore.handleAction({ type: 'GOT_NEW_ARTICLES', articles, });
      expect(ArticlesStore.getAllArticles()).toEqual(articles);
    });

    it('should not respond to an action not registered to it', () => {
      ArticlesStore.handleAction({ type: 'GOT_ARTICLES', articles, });
      expect(ArticlesStore.getAllArticles()).toEqual({});
    });
  });


  describe('Test for SET_SORTBY action type in store', () => {
    let articles;
    let dispatcherMock;
    beforeEach(() => {
      dispatcherMock = dispatcher.register.mock.calls[0][0];
      articles = [
        { sortBy: 'latest' },
        {
          author: 'TNW Deals',
        },
        {
          description: 'Ask any art pro',
        },
      ];
    });

    afterEach(() => {
      ArticlesStore.handleAction({ type: 'SET_SORTBY', articles: {} });
    });

    it('should return an empty object on first call', () => {
      expect(ArticlesStore.getAllArticles()).toEqual({});
    });

    it('should be registered to a dispatcher', () => {
      dispatcherMock({ type: 'SET_SORTBY', articles, });
      expect(ArticlesStore.getAllArticles()).toEqual(articles);
    });

    it('should return an updated Articles after receiving an action', () => {
      ArticlesStore.handleAction({ type: 'SET_SORTBY', articles, });
      expect(ArticlesStore.getAllArticles()).toEqual(articles);
    });

    it('should not respond to an action not registered to it', () => {
      ArticlesStore.handleAction({ type: 'SET_ALL_CATEGORY', articles, });
      expect(ArticlesStore.getAllArticles()).toEqual({});
    });
  });
});
