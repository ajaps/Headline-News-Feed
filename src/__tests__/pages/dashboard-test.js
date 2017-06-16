import { mount, shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import Dashboard from '../../Pages/Dashboard';

jest.mock('../../apiFolder/NewsApi', () => ({
  getData: () => Promise.resolve('getPromise')
}));

const mockData = { article: [{
  author: 'Tristan Greene',
  title: 'Tinder for platonic threesomes is an actual thing',
  description: 'There’s an ambitious new app that wants to help you to find a couple of new friends. The app is called Me3 and was developed by two guys who wanted to bring the ease-of-use of Tinder ...',
  url: 'https://thenextweb.com/apps/2017/06/15/someone-made-a-tinder-for-platonic-threesomes/',
  urlToImage: 'https://cdn3.tnwcdn.com/wp-content/blogs.dir/1/files/2017/06/me3.jpg',
  'publishedAt': '2017-06-15T18:11:20Z'
}],
  source: [{
    'id': 'al-jazeera-english',
    name: 'Al Jazeera English',
    description: 'News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.',
    url: 'http://www.aljazeera.com',
    'category': 'general',
    language: 'en',
    'country': 'us',
    urlsToLogos: {
      'small': '',
      'medium': '',
      'large': '' },
    sortBysAvailable: [
      'top',
      'latest']
  },
  ]
};
describe('Dashboard page', () => {
  it('should render as expected', () => {
    const app = shallow(<Dashboard />);
    app.setState(mockData);
    const tree = toJson(app);
    expect(tree).toMatchSnapshot();
  });

  it('should have state', () => {
    // let app = shallow(<Dashboard />);
    //console.log(app.state);
  });

  // it('should render as expected', () => {
  //   const tree = toJson(app);
  //   expect(tree).toMatchSnapshot();
  // });

  // it('initial state to be "/Dasboard" ', () => {
  //   expect(app.state().url).toBe('/Dasboard');
  // });

  // it('calls componentDidMount', () => {
  //   sinon.spy(Dasboard.prototype, 'componentDidMount');
  //   const wrapper = mount(<Dasboard />);
  //   expect(Dasboard.prototype.componentDidMount).to.have.property('callCount', 1);
  //   Dasboard.prototype.componentDidMount.restore();
  // });

  // const mockfn = jest.fn(() => { this.setState = ({ user: null }); });
  // const layout = ReactTestUtils.renderIntoDocument(<Layout />);
  // const signInFunc = ReactTestUtils.EventSimulator
  // //ReactTestUtils.Simulate.click(signInFunc);
  // console.log(signInFunc)
});
