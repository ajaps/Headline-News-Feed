import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import Footer from '../../components/Footer.jsx';


describe('Footer component', () => {
  let app;
  beforeEach(() => {
    app = shallow(<Footer />);
  });

  it('should render as expected', () => {
    const tree = toJson(app);
    expect(tree).toMatchSnapshot();
  });

  it('should contain name of the app "Healine News" ', () => {
    expect(app.exists('Headline RSS Feed App (c) 2017 ')).toBe(true);
  });
});
