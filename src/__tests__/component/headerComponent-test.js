import { mount, shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import Header from '../../component/Header';

describe('Header', () => {
  let app;
  beforeEach(() => {
    const allLanguages = [{ key: 'ig', text: 'Igbo' }, { key: 'yr', text: 'Yoruba' }];
    app = shallow(<Header allLanguage={allLanguages} setLan={() => 'y' } />);
  });

  it('should render as expected', () => {
    const tree = toJson(app);
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const allLanguages = [{ key: 'ig', text: 'Igbo' }, { key: 'yr', text: 'Yoruba' }];
    shallow(<Header key={allLanguages.key} allLanguage={ allLanguages } />);
  });

  it('is a function', () => {
    app.instance().setLanguage();
  });

  it('contains Igbo language clickable element', () => {
    expect(app.exists(<li>Igbo</li>)).toBe(true);
  });

  it('contains Yoruba language clickable element', () => {
    expect(app.exists(<li>Yoruba</li>)).toBe(true);
  });

  it('contains Logout clickable element', () => {
    expect(app.exists(<li>Logout</li>)).toBe(true);
  });

  it('recieves Two(2) props', () => {
    expect(Object.keys(app.props()).length).toBe(2);
  });

  it('to contain 3 li(list item) when two object are passed', () => {
    expect(app.find('li').length).toEqual(3);
  });
});
