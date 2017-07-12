import { shallow } from 'enzyme';
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import toJson from 'enzyme-to-json';
import Dashboard from '../../pages/Dashboard.jsx';

jest.mock('../../api/NewsApi', () => ({
  getData: () => Promise.resolve('getPromise')
}));
const sortBysAvailable = ['top', 'latest'];

describe('Dashboard page', () => {
  let app;
  it('should render as expected', () => {
    app = shallow(<Dashboard />);
    const tree = toJson(app);
    expect(tree).toMatchSnapshot();
  });

  it('should contain one Article component', () => {
    expect(app.find('ArticleComponent').length).toBe(1);
  });

  it('should contain one Source component', () => {
    expect(app.find('SourcesComponent').length).toBe(1);
  });

  it('should pass dashboard sortfilter state to sortFilter component', () => {
    app.setState({ sortFilter: sortBysAvailable });
    expect(app.exists('<SortFilter sortFilter={Array ["top", "latest",]}/>'))
    .toBe(true);
  });

  it('component should unmount without error', () => {
    const renderedDoc = ReactTestUtils.renderIntoDocument(
      <Dashboard />
    );
    renderedDoc.componentWillUnmount();
  });
});
