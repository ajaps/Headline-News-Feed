import { mount, shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import Layout from '../../Pages/Layout.jsx';

jest.mock('firebase', () => ({
  initializeApp: () => Promise.resolve('getPromise'),
  auth: {onAuthStateChanged: () => Promise.resolve('user')}
}));

describe('Layout page', () => {
let app
beforeEach(() => {
   app = shallow(<Layout />);
});

  it('should render as expected', () => {
    const app = shallow(<Layout />);
    const tree = toJson(app);
    expect(tree).toMatchSnapshot();
  });
});
