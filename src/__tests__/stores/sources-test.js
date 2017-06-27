import SourcesStore from '../../stores/Sources';
import dispatcher from '../../dispatcher/HeadlineDispatcher';

jest.mock('../../dispatcher/HeadlineDispatcher');

describe('Sources Store', () => {
  describe('Test for FETCH_SOURCES action type in store', () => {
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

    it('should return an empty object on first call', () => {
      expect(SourcesStore.getAllSources()).toEqual([]);
    });
    it('should return ["all] on first call for current category', () => {
      expect(SourcesStore.getCurrentCategory()).toEqual(['all']);
    });

    it('should be registered to a dispatcher', () => {
      dispatcherMock({ type: 'FETCH_SOURCES', sources, });
      expect(SourcesStore.getAllSources()).toEqual(sources);
    });

    it('should return an updated Articles after receiving an action', () => {
      SourcesStore.handleAction({ type: 'FETCH_SOURCES', sources, });
      expect(SourcesStore.getAllCategory()).toEqual(sources);
    });

    it('should not respond to an action not registered to it', () => {
      SourcesStore.handleAction({ type: 'FETCH_SOURCE', sources, });
      expect(SourcesStore.getAllSources()).toEqual({});
    });

    it('should always return the default url', () => {
      const url = { URL_SOURCE: 'https://newsapi.org/v1/sources?language=en',
        category: 'all' };
      expect(SourcesStore.getUrl()).toEqual(url);
    });
  });


  describe('Test for SET_CATEGORY action type in store', () => {
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

    it('should return an empty object on first call', () => {
      expect(SourcesStore.getAllSources()).toEqual({});
    });

    it('should be registered to a dispatcher', () => {
      dispatcherMock({ type: 'SET_CATEGORY', sources, });
      expect(SourcesStore.getAllSources()).toEqual(sources);
    });

    it('should return an updated Articles after receiving an action', () => {
      SourcesStore.handleAction({ type: 'SET_CATEGORY', sources, });
      expect(SourcesStore.getAllSources()).toEqual(sources);
    });

    it('should not respond to an action not registered to it', () => {
      SourcesStore.handleAction({ type: 'SET_ALL_CATEGORY', sources, });
      expect(SourcesStore.getAllSources()).toEqual({});
    });
  });

  describe('Test for ERROR_FETCH_SOURCES action type in store', () => {
    let error;
    let dispatcherMock;
    beforeEach(() => {
      dispatcherMock = dispatcher.register.mock.calls[0][0];
      error = 'Could not connect to the internet';
    });

    afterEach(() => {
      SourcesStore.handleAction({ type: 'ERROR_FETCH_SOURCES', error: {} });
    });

    it('should return an empty object on first call', () => {
      expect(SourcesStore.getErrorMsg()).toEqual(undefined);
    });

    it('should be registered to a dispatcher', () => {
      dispatcherMock({ type: 'ERROR_FETCH_SOURCES', error, });
      expect(SourcesStore.getErrorMsg()).toEqual(error);
    });

    it('should return an updated Articles after receiving an action', () => {
      SourcesStore.handleAction({ type: 'ERROR_FETCH_SOURCES', error, });
      expect(SourcesStore.getErrorMsg()).toEqual(error);
    });

    it('should not respond to an action not registered to it', () => {
      SourcesStore.handleAction({ type: 'ERROR_FETCH', error, });
      expect(SourcesStore.getErrorMsg()).toEqual({});
    });
  });
});
