import { EventEmitter } from 'events';

import Dispatcher from '../dispatcher/HeadlineDispatcher';

class AllSources extends EventEmitter {
  constructor() {
    super();

	this.getSourceUrl = {
      language: 'en',
      category: 'all',
    };

    this.sources = [
      {
				"id": "abc-news-au",
				"name": "ABC News (AU)",
				"description": "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
				"url": "http://www.abc.net.au/news",
				"category": "general",
				"language": "en",
				"country": "au",
				"urlsToLogos": {
				"small": "",
				"medium": "",
				"large": ""
				},
				"sortBysAvailable": [
				"top"
				]
			},

			{
				"id": "al-jazeera-english",
				"name": "Al Jazeera English",
				"description": "News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.",
				"url": "http://www.aljazeera.com",
				"category": "general",
				"language": "en",
				"country": "us",
				"urlsToLogos": {
				"small": "",
				"medium": "",
				"large": ""
				},
				"sortBysAvailable": [
				"top",
				"latest"
				]
			},

			{
				"id": "ars-technica",
				"name": "Ars Technica",
				"description": "The PC enthusiast's resource. Power users and the tools they love, without computing religion.",
				"url": "http://arstechnica.com",
				"category": "technology",
				"language": "en",
				"country": "us",
				"urlsToLogos": {
				"small": "",
				"medium": "",
				"large": ""
				},
				"sortBysAvailable": [
				"top",
				"latest"
				]
			},

			{
				"id": "associated-press",
				"name": "Associated Press",
				"description": "The AP delivers in-depth coverage on the international, politics, lifestyle, business, and entertainment news.",
				"url": "https://apnews.com/",
				"category": "general",
				"language": "en",
				"country": "us",
				"urlsToLogos": {
				"small": "",
				"medium": "",
				"large": ""
				},
				"sortBysAvailable": [
				"top"
				]
			},

			{
				"id": "bbc-news",
				"name": "BBC News",
				"description": "Use BBC News for up-to-the-minute news, breaking news, video, audio and feature stories. BBC News provides trusted World and UK news as well as local and regional perspectives. Also entertainment, business, science, technology and health news.",
				"url": "http://www.bbc.co.uk/news",
				"category": "general",
				"language": "en",
				"country": "gb",
				"urlsToLogos": {
				"small": "",
				"medium": "",
				"large": ""
				},
				"sortBysAvailable": [
				"top"
				]
			},

			{
				"id": "bbc-sport",
				"name": "BBC Sport",
				"description": "The home of BBC Sport online. Includes live sports coverage, breaking news, results, video, audio and analysis on Football, F1, Cricket, Rugby Union, Rugby League, Golf, Tennis and all the main world sports, plus major events such as the Olympic Games.",
				"url": "http://www.bbc.co.uk/sport",
				"category": "sport",
				"language": "en",
				"country": "gb",
				"urlsToLogos": {
				"small": "",
				"medium": "",
				"large": ""
				},
				"sortBysAvailable": [
				"top"
				]
			},
			{
				"id": "bloomberg",
				"name": "Bloomberg",
				"description": "Bloomberg delivers business and markets news, data, analysis, and video to the world, featuring stories from Businessweek and Bloomberg News.",
				"url": "http://www.bloomberg.com",
				"category": "business",
				"language": "en",
				"country": "us",
				"urlsToLogos": {
				"small": "",
				"medium": "",
				"large": ""
				},
				"sortBysAvailable": [
				"top"
				]
			},
		]
	}

  getNewSource() { //filterStore.headlineUrl 
    let url = 'https://newsapi.org/v1/sources';
	url += '?language=' + this.getSourceUrl.language;
	if (this.getSourceUrl.category !== 'all') {
		url += '&category=' + this.getSourceUrl.category;
	}

	//GET news headline sources based on API
	const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
	  if (xhr.readyState == 4 && xhr.status == 200) {
        const sources = xhr.responseText;
        //console.log(JSON.stringify(JSON.parse(sources).sources));
		this.sources = JSON.parse(sources).sources;
        console.log('FETCH DATA API Status', JSON.parse(sources).sources);
        //console.log(JSON.parse(sources.status));
        // this.state.list = JSON.parse(xhr.responseText);
        // this.setState(this.state);
      }
    };
    xhr.open('GET', url);
    xhr.send();
	console.log(url);
		/*
    this.sources.push(
      {
				"id": "breitbart-news",
				"name": "Breitbart News",
				"description": "Syndicated news and opinion website providing continuously updated headlines to top news and analysis sources.",
				"url": "http://www.breitbart.com",
				"category": "politics",
				"language": "en",
				"country": "us",
				"urlsToLogos": {
				"small": "",
				"medium": "",
				"large": ""
				},
				"sortBysAvailable": [
				"top",
				"latest"
				]
			},
			)
			*/
    this.emit('sourceChange');
  }



  getAll() {
    return this.sources;
  }

  handleAction(action) {
    switch (action.type) {
      case 'GET_SOURCES':
        this.getNewSource();
		break;
      case 'SET_CATEGORY':
	  	this.getSourceUrl.category = action.text;
        this.getNewSource();
        break;
      case 'SET_LANGUAGE':
	  	this.getSourceUrl.language = action.text;
        this.getNewSource();
		break;
    }
		console.log('SOURCE STORE', action.type);
  }
}

const SourcesStore = new AllSources;
Dispatcher.register(SourcesStore.handleAction.bind(SourcesStore));
window.Dispatcher = Dispatcher;
export default SourcesStore;