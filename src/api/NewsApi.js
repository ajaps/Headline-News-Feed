class getNewsData {

/**
* Gets Data from News API using the url passed as params
* @param {String} url - the url for requesting data from API
* @returns {object} - A JSON object contianing relevant information
*/
  static getData(urlType) {
    if (urlType === 'source') {
      const URL_SOURCE = 'https://newsapi.org/v1/sources?language=en';
    } else {
      const URL_ARTICLE = 'https://newsapi.org/v1/articles';
    }
    // if (fruit === undefined) {
    //     fruit = "strawberry";
    // }
    return fetch(url)
            .then(res => res.json());
  }
}

export default getNewsData;
