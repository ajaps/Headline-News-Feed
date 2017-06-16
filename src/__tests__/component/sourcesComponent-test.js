import { mount, shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import SourcesComponent from '../../component/SourcesComponent';

jest.mock('../../apiFolder/NewsApi', () => ({
  getData: () => Promise.resolve('getPromise')
}));

describe('Category', () => {
  let app;
  const sourceObject =
    {
      "id": "abc-news-au",
      "name": "ABC News (AU)",
      "description": "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
      "url": "http://www.abc.net.au/news",
      "category": "general",
      "language": "en",
      "country": "au",
      "urlsToLogos": {
      "small": "",
      "medium": "",
      "large": ""
      },
        "sortBysAvailable": [
        "top"
      ]
    };

  it('should render as expected', () => {
    app = shallow(<SourcesComponent key={sourceObject.id}{...sourceObject}/>);
    const tree = toJson(app);
    expect(tree).toMatchSnapshot();
  });

  it('should have extacly one anchor element', () => {
    expect(app.find('a').length).toEqual(1);
  });

  it('should have display text using the value of "name" in the object passed', () => {
    const result = 'ABC News (AU)';
    expect(app.text()).toBe(result);
  });

  it('should call the setCategory function on click the anchor element', () => {
    app.find('a').simulate('click');
    expect(app).toBeTruthy();
  });
});
