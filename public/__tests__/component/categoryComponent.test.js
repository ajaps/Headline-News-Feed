import { mount, shallow } from 'enzyme';
import React from 'react';
import CategoryComponent from '../../component/CategoryComponent';

describe('Category', () => {
  let app;
  // const mockFn = jest.fn();
  // mockFn();
  // expect(mockFn).toHaveBeenCalled();
  beforeEach(() => {
    const name = 'ALL';
    app = shallow(<CategoryComponent name={name} />);
  });

  it('renders without crashing', () => {
    shallow(<CategoryComponent name={name} />);
  });
});
