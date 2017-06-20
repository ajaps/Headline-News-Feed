import { mount, shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import Login from '../../Pages/Login';

describe('Login page', () => {
  let app;
  beforeEach(() => {
    app = shallow(<Login logInFirebase={jest.fn()}/>);
  });

  it('should render as expected', () => {
    const tree = toJson(app);
    expect(tree).toMatchSnapshot();
  });

  it('should contian', () => {
    expect(app.find('Login with Google')).toBeTruthy();
  });

  it('should contian two buttons', () => {
    expect(app.find('button').length).toBe(2);
  });
});
