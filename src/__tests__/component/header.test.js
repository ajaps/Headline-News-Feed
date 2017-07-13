import { shallow } from 'enzyme';
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import toJson from 'enzyme-to-json';
import Header from '../../components/Header.jsx';

jest.mock('../../config/authentication', () => ({
  logout: () => Promise.resolve('getPromise')
}));

describe('Header component', () => {
  let app;
  beforeEach(() => {
    const isLoggedIn = true;
    app = shallow(<Header containLogoutBtn={isLoggedIn} />);
  });

  it('should render as expected', () => {
    const tree = toJson(app);
    expect(tree).toMatchSnapshot();
  });

  it('logout button should be visible when authenticated', () => {
    expect(app.exists('Logout')).toBe(true);
  });

  it('logout button should not be visible when user isn\'t logged', () => {
    const isLoggedIn = false;
    app = shallow(<Header containLogoutBtn={isLoggedIn} />);
    expect(app.exists('hidden')).toBe(true);
  });

  it('should process logout when user clicks logout', () => {
    const isLoggedIn = true;
    const renderedDoc = ReactTestUtils.renderIntoDocument(
      <Header containLogoutBtn={isLoggedIn} />
    );
    const logoutBtn = renderedDoc.refs.logout;
    ReactTestUtils.Simulate.click(logoutBtn);
  });
});
