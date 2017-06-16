import { mount, shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import Layout from '../../Pages/Layout';

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

  it('initial state to be "/Dasboard" ', () => {
    expect(app.state().url).toBe('/Dasboard');
  });

  it('should have called componentDidMount', () => {
    app.setState({ user: 'user' });
  });
});
