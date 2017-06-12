import { mount, shallow } from 'enzyme';
import React from 'react';
import Header from '../../component/Header';

describe('Header', () => {
  let app;
  beforeEach(() => {
    const allLanguages = [{ ig: 'Igbo', yr: 'Yoruba' }];
    app = shallow(<Header allLanguage={allLanguages}/>);
  });

  it('renders without crashing', () => {
    const allLanguages = [{ ig: 'Igbo', yr: 'Yoruba' }];
    mount(<Header allLanguage={ allLanguages } />);
  });

  it('function', () => {
    app.instance().setLanguage();
  });

  it('contains English language clickable element', () => {
    expect(app.exists(<li>English</li>)).toBe(true);
  });

  it('contains Germany language clickable element', () => {
    expect(app.exists(<li>German</li>)).toBe(true);
  });

  it('contains French language clickable element', () => {
    expect(app.exists(<li>French</li>)).toBe(true);
  });

  it('contains Logout clickable element', () => {
    expect(app.exists(<li>Logout</li>)).toBe(true);
  });

  it('recieves Two(2) props', () => {
    expect(Object.keys(app.props()).length).toBe(2);
  });
});

/*
  expect(checkbox.text()).toEqual('Off');

  checkbox.find('input').simulate('change');

  expect(checkbox.text()).toEqual('On');
});

const wrapper = shallow(<Foo />);

expect(wrapper.find('.clicks-0').length).to.equal(1);
wrapper.find('a').simulate('click');
expect(wrapper.find('.clicks-1').length).to.equal(1);

it('contains ', () => {
    app.find('English').simulate('click');
    expect(app.find('English').length).to.equal(1);
  });
*/
