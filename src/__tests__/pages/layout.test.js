import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import Layout from '../../pages/Layout.jsx';


jest.mock('../../config/firebase', () => ({
}));

describe('Layout component', () => {
  let app;
  beforeEach(() => {
    app = shallow(<Layout />);
  });

  it('should render as expected', () => {
    const tree = toJson(app);
    expect(tree).toMatchSnapshot();
  });
});
