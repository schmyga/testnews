<script>
  fetch('https://ria.ru/export/rss2/index.xml')
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, 'application/xml');
      const items = doc.querySelectorAll('item');
      let newsContent = '';
      items.forEach(item => {
        newsContent += `${item.querySelector('title').textContent} - `;
      });
      document.getElementById('news-ticker').textContent = newsContent;
    })
    .catch(error => console.error(error));
</script>
