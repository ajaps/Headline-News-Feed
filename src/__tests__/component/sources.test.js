import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import Sources from '../../components/Sources.jsx';

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
        sortBysAvailable: [
          'popular',
          'latest',
        ]
      },
    ];

  it('should render as expected', () => {
    app = shallow(<Sources error={err} sourceSelected={sourceSelected}
        sources={sourceObject}
                  />);
    const tree = toJson(app);
    expect(tree).toMatchSnapshot();
  });
});
