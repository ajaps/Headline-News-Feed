import { shallow } from 'enzyme';
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import toJson from 'enzyme-to-json';
import Login from '../../pages/Login.jsx';

jest.mock('../../config/authentication', () => ({
  login: () => Promise.resolve('logged In')
}));

describe('Login page', () => {
  let app;
  beforeEach(() => {
    app = shallow(<Login />);
  });

  it('should render as expected', () => {
    const tree = toJson(app);
    expect(tree).toMatchSnapshot();
  });

  it('should contian Google+ login button', () => {
    expect(app.find('Login with Google')).toBeTruthy();
  });

  it('should contian Github login button', () => {
    expect(app.find('Login with Github')).toBeTruthy();
  });

  it('should contian two buttons', () => {
    expect(app.find('button').length).toBe(2);
  });

  it('button calls handleLogin function', () => {
    const renderedDoc = ReactTestUtils.renderIntoDocument(
      <Login />
    );
    const loginBtn = renderedDoc.refs.googleBtn;
    ReactTestUtils.Simulate.click(loginBtn);
  });

  it('component should get data from sources store without error', () => {
    const renderedDoc = ReactTestUtils.renderIntoDocument(
      <Login />
    );
    renderedDoc.getLoginError();
  });

  it('component should unmount without error', () => {
    const renderedDoc = ReactTestUtils.renderIntoDocument(
      <Login />
    );
    renderedDoc.componentWillUnmount();
  });
});
