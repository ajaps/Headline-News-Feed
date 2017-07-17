import { shallow } from 'enzyme';
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import toJson from 'enzyme-to-json';
import Category from '../../components/Category.jsx';

jest.mock('../../api/NewsApi', () => ({
  fetchApiSources: () => Promise.resolve('getPromise')
}));

describe('Category component', () => {
  const categoryItem = { category: 'sport' };
  const currentCategory = 'sport';
  let app;
  beforeEach(() => {
    app = shallow(
      <Category
          category={categoryItem}
          currentCategory={currentCategory}
          key={categoryItem.category}
      />);
  });

  it('should render as expected', () => {
    const tree = toJson(app);
    expect(tree).toMatchSnapshot();
  });

  it('should call the set category function', () => {
    const renderedDoc = ReactTestUtils.renderIntoDocument(
      <Category
          category={categoryItem}
          currentCategory={currentCategory}
          key={categoryItem.category}
      />
    );
    const setCategoryBtn = renderedDoc.refs.category;
    ReactTestUtils.Simulate.click(setCategoryBtn);
  });
});
