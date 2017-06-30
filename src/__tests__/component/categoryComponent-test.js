import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import CategoryComponent from '../../components/CategoryComponent.jsx';

jest.mock('../../api/NewsApi', () => ({
  getData: () => Promise.resolve('getPromise')
}));

describe('Category', () => {
  const sources = [{ category: 'general' }, { category: 'sport' }];
  let app;
  beforeEach(() => {
    app = shallow(<CategoryComponent currentcategory={['general']}
    allCategory={sources} />);
  });

  it('should render as expected', () => {
    const tree = toJson(app);
    expect(tree).toMatchSnapshot();
  });

  it('should same number of a tag element as the lenght of the array', () => {
    expect(app.find('a').length).toEqual(2);
  });

  it('should have only 1 active class set to the current category', () => {
    expect(app.find('li.active').length).toBe(1);
  });
});
