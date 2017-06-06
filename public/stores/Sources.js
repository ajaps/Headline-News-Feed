import { EventEmitter } from 'events';

import Dispatcher from '../dispatcher/HeadlineDispatcher';

class AllSources extends EventEmitter {
  constructor() {
    super();

	this.getSourceUrl = {
      language: 'en',
      category: 'all',
    };

    this.sources = [];
	}

  getNewSource() {
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
		this.emit('sourceChange');
		if(JSON.parse(sources).sources.length < 2){
			alert('This Source does not contain any Article');
		}
        //console.log(JSON.parse(sources.status));
        // this.state.list = JSON.parse(xhr.responseText);
        // this.setState(this.state);
      }
    };
    xhr.open('GET', url);
    xhr.send();
	console.log(url);
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