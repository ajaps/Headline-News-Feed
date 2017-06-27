import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import Layout from '../../pages/Layout';

jest.mock('../../config/firebase', () => ({
}));

describe('Layout page', () => {
  let app;
  beforeEach(() => {
    app = shallow(<Layout />);
  });

  it('should render as expected', () => {
    const tree = toJson(app);
    expect(tree).toMatchSnapshot();
  });

  it('should render only loading element at initial page load', () => {
    expect(app.find('Loading').length).toBe(1);
    expect(app.find('div').length).toBe(0);
  });
});
