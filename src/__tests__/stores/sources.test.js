import SourcesStore from '../../stores/Sources';
import dispatcher from '../../dispatcher/Headlines';

jest.mock('../../dispatcher/Headlines');

describe('In sources Store', () => {
  describe('When an action type of FETCH_SOURCES is dispatched', () => {
    let sources;
    let dispatcherMock;
    beforeEach(() => {
      dispatcherMock = dispatcher.register.mock.calls[0][0];
      sources = [
        {
          id: 'abc-news-au',
          category: 'general',
        },
        {
          id: 'bbc-sport',
          category: 'sport',
        },
      ];
    });

    afterEach(() => {
      SourcesStore.handleAction({ type: 'FETCH_SOURCES', sources: {} });
    });

    it('it should return an empty string for current category', () => {
      expect(SourcesStore.getCurrentCategory()).toEqual([]);
    });

    it('it should return updated Articles after receiving an action', () => {
      SourcesStore.handleAction({ type: 'FETCH_SOURCES', sources, });
      expect(SourcesStore.getAllCategory()).toEqual(sources);
    });

    it('it should not respond to an action not registered to it', () => {
      SourcesStore.handleAction({ type: 'FETCH_SOURCE', sources, });
      expect(SourcesStore.getAllSources()).toEqual({});
    });
  });


  describe('When an action type of SET_CATEGORY is dispatched', () => {
    let sources;
    let dispatcherMock;
    beforeEach(() => {
      dispatcherMock = dispatcher.register.mock.calls[0][0];
      sources = [
        {
          id: 'ESPN sport news',
          category: 'sport',
        },
        {
          id: 'bbc-sport',
          category: 'sport',
        },
      ];
    });

    afterEach(() => {
      SourcesStore.handleAction({ type: 'SET_CATEGORY', sources: {} });
    });

    it('it should return updated Articles after receiving an action', () => {
      SourcesStore.handleAction({ type: 'SET_CATEGORY', sources, });
      expect(SourcesStore.getAllSources()).toEqual(sources);
    });

    it('it should not respond to an action not registered to it', () => {
      SourcesStore.handleAction({ type: 'SET_ALL_CATEGORY', sources, });
      expect(SourcesStore.getAllSources()).toEqual({});
    });
  });
});
