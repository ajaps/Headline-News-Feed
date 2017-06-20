import { mount, shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import SortFilter from '../../component/SortFilter.jsx';

describe('Category', () => {
  let app;
  const filter = ['top', 'latest'];

  beforeEach(() => {
      app = shallow(<SortFilter sortFilter={filter} />);
  });

  it('should render as expected', () => {
    app = shallow(<SortFilter sortFilter={filter} />);
    const tree = toJson(app);
    expect(tree).toMatchSnapshot();
  });

  it('should have extacly three(plus one) dropdown children element', () => {
    expect(app.find('li').length).toEqual(4);
  });
});
