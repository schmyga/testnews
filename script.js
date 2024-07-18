const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

// Включаем CORS, чтобы разрешить доступ с любого домена
app.use(cors());

// Маршрут для получения новостей
app.get('/news', async (req, res) => {
  const feedUrl = req.query.feedUrl;

  try {
    const response = await fetch(feedUrl);
    const data = await response.text();
    res.send(data);
  } catch (error) {
    console.error('Error fetching news feed:', error);
    res.status(500).send('Error fetching news feed');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// Функция для отображения новостей
function displayNews() {
  // URL-адрес сервера
  const serverUrl = 'http://localhost:3000';

  // URL-адреса RSS-лент
  const newsFeeds = [
    '/news?feedUrl=https://www.stern.de/feed/standard/all/',
    '/news?feedUrl=https://feeds.bbci.co.uk/news/rss.xml',
    '/news?feedUrl=http://rss.cnn.com/rss/edition.rss',
    '/news?feedUrl=https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml',
    '/news?feedUrl=https://feeds.reuters.com/reuters/topNews'
  ];

  // Получаем элемент новостной ленты из HTML
  const newsTicker = document.getElementById('news-ticker');

  // Очищаем содержимое элемента новостной ленты
  newsTicker.textContent = '';

  // Итерируем по массиву URL-адресов RSS-лент
  newsFeeds.forEach(feedUrl => {
    fetch(`${serverUrl}${feedUrl}`)
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
