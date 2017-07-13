import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import SortFilter from '../../components/SortFilter.jsx';

jest.mock('../../stores/Articles', () => ({
  getArticleUrl: {
    sortBy: '',
    source: 'all',
  }
}));
const myMock = jest.fn();
myMock('bySort');

describe('SortFiler component', () => {
  let app;
  const filter = ['top', 'latest'];
  beforeEach(() => {
    app = shallow(<SortFilter sortFilter={filter} />);
  });

  it('should render as expected', () => {
    const tree = toJson(app);
    expect(tree).toMatchSnapshot();
  });

  it('should have dropdown children equal to length of props', () => {
    expect(app.find('li').length).toEqual(2);
  });
});
