import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import PageNotFound from '../../pages/PageNotFound.jsx';

describe('404 componenet', () => {
  let app;
  beforeEach(() => {
    app = shallow(<PageNotFound />);
  });

  it('should render as expected', () => {
    const tree = toJson(app);
    expect(tree).toMatchSnapshot();
  });

  it('should contian', () => {
    expect(app.find('Page not found')).toBeTruthy();
  });
});
