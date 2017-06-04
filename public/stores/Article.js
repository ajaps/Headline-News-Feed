import { EventEmitter } from 'events';

import Dispatcher from '../dispatcher/HeadlineDispatcher';
import filterStore from './HeadlineFilter';


class AllArticle extends EventEmitter {
  constructor() {
    super();
    this.article = [
      {
				"author": "Khaled \"Tito\" Hamze",
				"title": "Crunch Report",
				"description": "Your daily roundup of the biggest TechCrunch stories and startup news.",
				"url": "https://techcrunch.com/video/crunchreport/",
				"urlToImage": "https://tctechcrunch2011.files.wordpress.com/2015/03/tccrshowogo.jpg?w=500&h=200&crop=1",
				"publishedAt": "2017-05-30T20:00:29Z"
			},

			{
				"author": "Josh Constine",
				"title": "The best Meeker 2017 Internet Trends slides and what they mean",
				"description": "Here are the must-read stats about what's happening with internet adoption, smartphones, ads, e-commerce, entertainment, gaming, enterprise healthcare, China,..",
				"url": "https://techcrunch.com/gallery/internet-trends-2017/",
				"urlToImage": "https://tctechcrunch2011.files.wordpress.com/2017/05/mary-meeker-2017-internet-trends-best.png?w=764&h=400&crop=1",
				"publishedAt": "2017-05-31T20:09:14Z"
			},

			{
				"author": "Darrell Etherington",
				"title": "Elon Musk will leave Trump councils if U.S. withdraws from Paris agreement",
				"description": "Elon Musk says that he'll have \"no choice\" but to withdraw from the advisory councils he's currently serving for President Trump, should Trump decide to step..",
				"url": "https://techcrunch.com/2017/05/31/elon-musk-will-leave-trump-councils-if-u-s-withdraws-from-paris-agreement/",
				"urlToImage": "https://tctechcrunch2011.files.wordpress.com/2017/01/gettyimages-632485274.jpg?w=764&h=400&crop=1",
				"publishedAt": "2017-05-31T18:01:23Z"
			},

			{
				"author": "Taylor Hatmaker",
				"title": "Uber blew through $1 million a week in an effort to make UberPool viable in San Francisco",
				"description": "New documents leaked to BuzzFeed demonstrate yet again what Uber is willing to do to beat the competition at any cost.",
				"url": "https://techcrunch.com/2017/05/31/uberpool-sf-buzzfeed-documents-burn-rate/",
				"urlToImage": "https://tctechcrunch2011.files.wordpress.com/2017/05/uberpool.jpg?w=764&h=400&crop=1",
				"publishedAt": "2017-05-31T17:48:01Z"
			},	
		]
	}

  getAll() {
    return this.article;
  }

  getArticle() {
    const API_KEY = { KEY: '213327409d384371851777e7c7f78dfe' };
    let url = 'https://newsapi.org/v1/articles';
    if (filterStore.headlineUrl.source !== 'all') {
      url += '?source=' + filterStore.headlineUrl.source;
    }

    if (filterStore.headlineUrl.sortBy === 'all') {
      url += '?sortBy=' + filterStore.headlineUrl.sortBy;
    }

    else {
      url += '&sortBy=' + filterStore.headlineUrl.sortBy;
    }
    url += '&apiKey=' + API_KEY.KEY;
		console.log(url);
		/*
    this.article.push(
      {
				"author": "Natasha Lomas",
				"title": "Smartphone screens find their size sweet spot",
				"description": "The joke in the smartphone space in years past was how screens just kept getting bigger -- stretching palms and making you look ridiculous when held up to the..",
				"url": "https://techcrunch.com/2017/05/31/phables-are-the-phuture/",
				"urlToImage": "https://tctechcrunch2011.files.wordpress.com/2016/07/gettyimages-490626518.jpg?w=764&h=400&crop=1",
				"publishedAt": "2017-05-31T09:58:59Z"
			},
		) */
    this.emit('articleChange');
  }

  handleAction(action) {
    switch (action.type) {
      case 'GET_ARTICLES':
        this.getArticle();
        break;
      case 'SET_SOURCE':
        this.getArticle();
        break;
      case 'SET_SORTBY':
        this.getArticle();
        break;
    }
		console.log('ARTICLE STORE:', action.type);
  }
}

const ArticleStore = new AllArticle;
Dispatcher.register(ArticleStore.handleAction.bind(ArticleStore));
window.Dispatcher = Dispatcher;
export default ArticleStore;
