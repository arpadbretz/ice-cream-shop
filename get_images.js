const https = require('https');

https.get('https://unsplash.com/ngetty/v3/search/photos?query=ice%20cream&per_page=15', (resp) => {
  let data = '';
  resp.on('data', (chunk) => { data += chunk; });
  resp.on('end', () => {
    try {
      const parsed = JSON.parse(data);
      parsed.results.forEach(p => console.log(p.id, p.slug));
    } catch(e) { console.log("Failed to parse", e.message); }
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
