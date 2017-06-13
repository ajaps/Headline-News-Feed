import { mount, shallow } from 'enzyme';
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import Login from '../../Pages/Login';

describe('Login page', () => {
  let app;
  // const mockFn = jest.fn();
  // mockFn();
  // expect(mockFn).toHaveBeenCalled();
  beforeEach(() => {
    const mockFn = jest.fn();
    app = mount(<Login logInFirebase={mockFn} />);
  });

  it('should render without crashing', () => {
    expect(app).toBeTruthy();
  });

  it('should contian', () => {
    expect(app.contains('Login with Google')).toBeTruthy();
  });

  it('should have a clickable login button', () => {
    // const myLogin = app.find('button');
    //const myLogin = app.refs.button;
    console.log('refs', app.refs);
    // ReactTestUtils.Simulate.click(myLogin);
    console.log(ReactTestUtils.Simulate.click(app));
  });

});
