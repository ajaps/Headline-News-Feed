import { mount, shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import Page404 from '../../Pages/Page404';

describe('404 page', () => {
  let app;
  beforeEach(() => {
    app = shallow(<Page404 />);
  });

  it('should render as expected', () => {
    const tree = toJson(app);
    expect(tree).toMatchSnapshot();
  });

  it('should contian', () => {
    expect(app.find('Page not found')).toBeTruthy();
  });
});
