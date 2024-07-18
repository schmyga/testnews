fetch('https://ria.ru/export/rss2/index.xml')
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
    const newsTicker = document.getElementById('news-ticker');
    if (newsTicker) {
      newsTicker.textContent = newsContent;
    } else {
      console.error('Element with id "news-ticker" not found on the page.');
    }
  })
  .catch(error => {
    console.error('Error fetching news feed:', error);
  });
