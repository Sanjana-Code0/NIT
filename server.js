const express = require('express');
const bodyParser = require('body-parser');
const shortid = require('shortid');

const app = express();
const PORT = 3000;

// In-memory database for simplicity
const urlDatabase = {};

// Middleware
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send(`
      <h1>Welcome to the URL Shortener</h1>
      <p>To shorten a URL, send a POST request to <code>/shorten</code> with a JSON body containing the <code>originalUrl</code>.</p>
      <p>Example JSON body:</p>
      <pre>
        {
          "originalUrl": "https://example.com"
        }
      </pre>
    `);
  });
  
// Route to create a short URL
app.post('/shorten', (req, res) => {
  const { originalUrl } = req.body;

  if (!originalUrl) {
    return res.status(400).json({ error: 'originalUrl is required' });
  }

  const shortId = shortid.generate();
  urlDatabase[shortId] = originalUrl;

  res.status(201).json({ shortUrl: `http://localhost:${PORT}/${shortId}` });
});

// Route to redirect to the original URL
app.get('/:shortId', (req, res) => {
  const { shortId } = req.params;
  const originalUrl = urlDatabase[shortId];

  if (!originalUrl) {
    return res.status(404).json({ error: 'URL not found' });
  }

  res.redirect(originalUrl);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
