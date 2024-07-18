// Функция для отображения новостей
function displayNews() {
  // Массив URL-адресов RSS-лент
  const newsFeeds = [
    'https://feeds.bbci.co.uk/news/rss.xml',
    'http://rss.cnn.com/rss/edition.rss',
    'https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml',
    'https://feeds.reuters.com/reuters/topNews'
  ];

  // Получаем элемент новостной ленты из HTML
  const newsTicker = document.getElementById('news-ticker');

  // Очищаем содержимое элемента новостной ленты
  newsTicker.textContent = '';

  // Итерируем по массиву URL-адресов RSS-лент
  newsFeeds.forEach(feedUrl => {
    fetch(feedUrl)
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'application/xml');
        const items = doc.querySelectorAll('item');

        // Добавляем заголовки новостей в элемент новостной ленты
        items.forEach(item => {
          const title = item.querySelector('title');
          if (title) {
            const newsItem = document.createElement('span');
            newsItem.textContent = `${title.textContent} - `;
            newsTicker.appendChild(newsItem);
          }
        });
      })
      .catch(error => {
        console.error('Error fetching news feed:', error);
      });
  });
}

// Вызываем функцию для отображения новостей
displayNews();
