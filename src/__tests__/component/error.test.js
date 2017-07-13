import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import Error from '../../components/Error.jsx';


describe('Error component', () => {
  let app;
  beforeEach(() => {
    app = shallow(<Error error={'Failed to fetch'}/>);
  });

  it('should render as expected', () => {
    const tree = toJson(app);
    expect(tree).toMatchSnapshot();
  });
});
