import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import Error from '../../components/Error.jsx';


describe('Footer', () => {
  let app;
  beforeEach(() => {
    app = shallow(<Error error={'Failed to fetch'}/>);
  });

  it('should render as expected', () => {
    const tree = toJson(app);
    expect(tree).toMatchSnapshot();
  });

  it('contains the props that was passed "Failed to fetch" ', () => {
    expect(app.exists('Failed to fetch')).toBe(true);
  });
});
