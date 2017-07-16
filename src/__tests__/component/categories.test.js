import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import Categories from '../../components/Categories.jsx';

jest.mock('../../api/NewsApi', () => ({
  getData: () => Promise.resolve('getPromise')
}));

describe('Category component', () => {
  const sources = [{ category: 'general' }, { category: 'sport' }];
  let app;
  beforeEach(() => {
    app = shallow(
      <Categories allCategory={sources}
          currentcategory={['general']}
      />);
  });

  it('should render as expected', () => {
    const tree = toJson(app);
    expect(tree).toMatchSnapshot();
  });
});
