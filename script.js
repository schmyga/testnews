// Функция для отображения новостей
function displayNews() {
  // URL-адрес RSS-ленты
  const newsFeed = 'https://feeds.bbci.co.uk/news/rss.xml';

  // Получаем элемент новостной ленты из HTML
  const newsTicker = document.getElementById('news-ticker');

  // Очищаем содержимое элемента новостной ленты
  newsTicker.textContent = '';

  fetch(newsFeed)
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
}

// Вызываем функцию для отображения новостей
displayNews();
