import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import CategoryComponent from '../../components/CategoryComponent.jsx';

jest.mock('../../api/NewsApi', () => ({
  getData: () => Promise.resolve('getPromise')
}));

describe('Category', () => {
  let app;
  const onButtonClick = sinon.spy();
  // // const mockFn = jest.fn();
  // // mockFn();
  // // expect(mockFn).toHaveBeenCalled();
  beforeEach(() => {
    // const fetch = jest.fn();
    const categoryItem = { id: 'games', name: 'Games' };
    app = shallow(<CategoryComponent onClick={onButtonClick}
      key={categoryItem.id}{...categoryItem} category={['games']} />);
  });

  it('should render as expected', () => {
    const tree = toJson(app);
    expect(tree).toMatchSnapshot();
  });

  it('should have extacly one anchor element', () => {
    expect(app.find('a').length).toEqual(1);
  });

  it('should have a displayed text called Games', () => {
    expect(app.text()).toBe('Games');
  });

  it('should call the setCategory function on click the anchor element', () => {
    app.find('a').simulate('click');
    expect(app).toBeTruthy();
  });
});
