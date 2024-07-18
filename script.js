fetch('https://feeds.bbci.co.uk/news/rss.xml')
  .then(response => response.text())
  .then(data => {
    // Парсинг и отображение новостей
  })
  .catch(error => {
    console.error('Error fetching news feed:', error);
  });
