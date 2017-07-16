import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import ReactTestUtils from 'react-dom/test-utils';
import Source from '../../components/Source.jsx';

jest.mock('../../api/NewsApi', () => ({
  fetchApiArticles: () => Promise.resolve('getPromise')
}));

describe('Sources component', () => {
  let app;
  const sourceSelected = 'bbc-sport';
  const sourceObject =
    {
      id: 'bbc-sport',
      name: 'BBC SPORT',
      sortBysAvailable: [
        'popular',
        'latest',
      ]
    };

  it('should render as expected', () => {
    app = shallow(
      <Source
          activeSource={sourceSelected}
          key={sourceObject.id}
          source={sourceObject}
      />
    );
    const tree = toJson(app);
    expect(tree).toMatchSnapshot();
  });

  it('should call the set category function', () => {
    const renderedDoc = ReactTestUtils.renderIntoDocument(
      <Source
          activeSource={sourceSelected}
          key={sourceObject.id}
          source={sourceObject}
      />
    );
    const setSourceBtn = renderedDoc.refs.setSource;
    ReactTestUtils.Simulate.click(setSourceBtn);
  });
});
