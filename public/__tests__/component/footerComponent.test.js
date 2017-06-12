import { mount, shallow } from 'enzyme';
import React from 'react';
import Footer from '../../component/Footer';

describe('Footer', () => {
  let app;
  beforeEach(() => {
    app = shallow(<Footer />);
  });

  it('renders without crashing', () => {
    mount(<Footer />);
  });

  it('contains name of the app "Healine News" ', () => {
    expect(app.exists('Headline News')).toBe(true);
  });
});