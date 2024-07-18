fetch('https://feeds.bbci.co.uk/news/rss.xml')
  .then(response => response.text())
  .then(data => {
    // Парсинг и отображение новостей// Функция для парсинга и отображения новостей
function displayNews(feedUrl, newsTickerElement) {
  fetch(feedUrl)
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, 'application/xml');
      const items = doc.querySelectorAll('item');
      let newsContent = '';

      items.forEach(item => {
        const title = item.querySelector('title');
        if (title) {
          newsContent += `${title.textContent} - `;
        }
      });

      newsTickerElement.textContent = newsContent;
    })
    .catch(error => {
      console.error('Error fetching news feed:', error);
    });
}

// Получаем элемент новостной ленты из HTML
const newsTicker = document.getElementById('news-ticker');

// Вызываем функцию для отображения новостей с разных источников
displayNews('https://feeds.bbci.co.uk/news/rss.xml', newsTicker);
displayNews('http://rss.cnn.com/rss/edition.rss', newsTicker);
displayNews('https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml', newsTicker);
displayNews('https://feeds.reuters.com/reuters/topNews', newsTicker);

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
