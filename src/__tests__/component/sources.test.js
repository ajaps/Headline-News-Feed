import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import SourcesComponent from '../../components/Sources.jsx';

jest.mock('../../api/NewsApi', () => ({
  getData: () => Promise.resolve('getPromise')
}));

describe('Sources component', () => {
  let app;
  const err = null;
  const sourceSelected = 'bbc-sport';
  const sourceObject =
    [
      {
        id: 'bbc-sport',
        name: 'BBC SPORT',
        description: 'Cristiano Ronaldo extends his real madrid contract',
        url: 'http://www.bbcsport.com/news',
        category: 'sport',
        language: 'en',
        country: 'en',
        urlsToLogos: {
          small: '',
          medium: '',
          large: ''
        },
        sortBysAvailable: [
          'popular',
          'latest',
        ]
      },
      {
        id: 'abc-news-au',
        name: 'ABC News (AU)',
        description: "Australia's most trusted source of local",
        url: 'http://www.abc.net.au/news',
        category: 'general',
        language: 'en',
        country: 'au',
        urlsToLogos: {
          small: '',
          medium: '',
          large: ''
        },
        sortBysAvailable: [
          'top'
        ]
      }
    ];

  it('should render as expected', () => {
    app = shallow(<SourcesComponent error={err} sourceSelected={sourceSelected}
        sources={sourceObject}
                  />);
    const tree = toJson(app);
    expect(tree).toMatchSnapshot();
  });

  it('should have the same number of list element as the array length', () => {
    expect(app.find('li').length).toEqual(2);
  });
});
