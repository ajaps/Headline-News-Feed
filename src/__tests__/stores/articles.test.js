import ArticlesStore from '../../stores/Articles';
import dispatcher from '../../dispatcher/Headlines';

jest.mock('../../dispatcher/Headlines');

describe('In Articles Store', () => {
  describe('When an action type of FETCH_SOURCES is dispatched', () => {
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

    it('it should return an empty string for current category', () => {
      expect(ArticlesStore.getSelectedSourceID()).toEqual('');
    });

    it('it should return an updated Articles after receiving an action', () => {
      ArticlesStore.handleAction({ type: 'GOT_NEW_ARTICLES', articles, });
      expect(ArticlesStore.getAllArticles()).toEqual(articles);
    });

    it('it should not respond to an action not registered to it', () => {
      ArticlesStore.handleAction({ type: 'GET_ARTICLES', articles, });
      expect(ArticlesStore.getAllArticles()).toEqual({});
    });
  });


  describe('When an action type of SET_SORTBY is dispatched', () => {
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

    it('it should return updated Articles after receiving an action', () => {
      ArticlesStore.handleAction({ type: 'SET_SORTBY', articles, });
      expect(ArticlesStore.getAllArticles()).toEqual(articles);
    });

    it('it should not respond to an action not registered to it', () => {
      ArticlesStore.handleAction({ type: 'SET_ALL_CATEGORY', articles, });
      expect(ArticlesStore.getAllArticles()).toEqual({});
    });
  });
});
