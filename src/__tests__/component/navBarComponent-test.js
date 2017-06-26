import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import NavBar from '../../components/HeadlineNavbar.jsx';

const category = [{ id: 'all', name: 'All' }];

describe('NavBar', () => {
let app;
  it('should render as expected', () => {
    app = shallow(<NavBar category={category}/>);
    const tree = toJson(app);
    expect(tree).toMatchSnapshot();
  });

  it('contains English language clickable element', () => {
    let app = shallow(<NavBar />);
    expect(app.exists('<a>Top</a>')).toBe(true);
  });
});