class getNewsData {

/**
* Gets Sources from News API
* @param {String} category - the preferred category
* @returns {object} - A JSON object contianing relevant information
*/
  static fetchApiSources(category) {
    let URL_SOURCE = 'https://newsapi.org/v1/sources?language=en';
    if (category !== undefined) {
      URL_SOURCE += `&category=${category}`;
    }
    return fetch(URL_SOURCE)
            .then(res => res.json());
  }


  /**
* Gets Articles from News API
* @param {String} sourceId - the source ID
* @param {String} sortType - preferred sort type
* @returns {object} - A JSON object contianing relevant information
*/
  static fetchApiArticles(sourceId, sortType) {
    const API_KEY = process.env.NEWS_API_KEY;
    let url = `https://newsapi.org/v1/articles?source=${sourceId}`;
    if (sortType !== undefined) {
      url += `&sortBy=${sortType}&apiKey=${API_KEY}`;
    } else {
      url += `&apiKey=${API_KEY}`;
    }
    return fetch(url)
            .then(res => res.json());
  }
}

export default getNewsData;
