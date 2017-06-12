

function getNews(url) {
  console.log('im using api to get news');
  // let url = 'https://newsapi.org/v1/sources';
  //   url += `?language=${this.getSourceUrl.language}`;
  //   if (this.getSourceUrl.category !== 'all') {
  //     url += `&category=${this.getSourceUrl.category}`;
  //   }

  // GET news headline sources based on API
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        return xhr.responseText;
        //this.sources = JSON.parse(sources).sources;
      }
    };
    xhr.open('GET', url);
    xhr.send();
}


/*
fetch(url).then(response => response.json()).then(data => console.log(data));
*/
