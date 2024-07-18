fetch('https://feeds.bbci.co.uk/news/rss.xml')
  .then(response => response.text())
  .then(data => {
    // Парсинг и отображение новостей
  })
  .catch(error => {
    console.error('Error fetching news feed:', error);
  });
fetch('http://rss.cnn.com/rss/edition.rss')
  .then(response => response.text())
  .then(data => {
    // Парсинг и отображение новостей
  })
  .catch(error => {
    console.error('Error fetching news feed:', error);
  });
fetch('https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml')
  .then(response => response.text())
  .then(data => {
    // Парсинг и отображение новостей
  })
  .catch(error => {
    console.error('Error fetching news feed:', error);
  });
fetch('https://feeds.reuters.com/reuters/topNews')
  .then(response => response.text())
  .then(data => {
    // Парсинг и отображение новостей
  })
  .catch(error => {
    console.error('Error fetching news feed:', error);
  });
