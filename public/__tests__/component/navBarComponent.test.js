import { mount, shallow } from 'enzyme';
import React from 'react';
import NavBar from '../../component/HeadlineNavbar';

describe('NavBar', () => {
  let app;
  beforeEach(() => {
    app = shallow(<NavBar sortFilter = {['unavailable']}/>);
  });

  it('renders without crashing', () => {
    mount(<NavBar sortFilter = {['unavailable']}/>);
  });

  it('contains English language clickable element', () => {
    expect(app.exists('<a>Top</a>')).toBe(true);
  });
});