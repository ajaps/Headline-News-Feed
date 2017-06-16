import { mount, shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import NavBar from '../../component/HeadlineNavbar';

describe('NavBar', () => {

  it('should render as expected', () => {
    let app = shallow(<NavBar />);
    const tree = toJson(app);
    expect(tree).toMatchSnapshot();
  });

  it('should render with only filters "Top" enabled', () =>{
    // let app = shallow(<NavBar sortFilter={['top']} />);

    // expect(app.find('.Top').hasClass('disabled')).to.equal(true);
  });

  it('contains English language clickable element', () => {
    let app = shallow(<NavBar />);
    expect(app.exists('<a>Top</a>')).toBe(true);
  });

  it('renders buttons according to the length of the array passed plus 3(number of filters)', () => {
    let app = shallow(<NavBar />);
    expect(app.find('a').length).toBe(4);
  });

  it('diables sort filter button based on available sort', () => {
    
  });
});