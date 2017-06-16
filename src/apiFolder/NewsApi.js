/**
 * Represents News Api.
 */
class getNewsData {

/**
* Gets Data from News API using the url passed as params
* @param {String} url - the url for requesting data from API
* @returns {object} - A JSON object contianing relevant information
*/
  static getData(url) {
    return fetch(url)
            .then(res => res.json());
  }
}

export default getNewsData;
