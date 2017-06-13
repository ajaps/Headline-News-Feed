import { mount, shallow } from 'enzyme';
import React from 'react';
import Header from '../../component/Header';

describe('Header', () => {
  let app;
  beforeEach(() => {
    const allLanguages = [{ key: 'ig', text: 'Igbo' }, { key: 'yr', text: 'Yoruba' }];
    app = shallow(<Header allLanguage={allLanguages} setLan={() => 'y' } />);
  });

  it('renders without crashing', () => {
    const allLanguages = [{ ig: 'Igbo', yr: 'Yoruba' }];
    shallow(<Header key ={allLanguages.key}allLanguage={ allLanguages } />);
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
});
