require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const validurl = require('valid-url');

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

const url = {};
let shorturld = 1;

app.post("/api/shorturl", function (req, res) {
  const longurl = req.body.url;
  if (!validurl.isUri(longurl)) {
    return res.status(400).json({ error: "invalid url" });
  }
  const shorturl = `${req.protocol}://${req.get('host')}/api/shorturl/${shorturld}`;
  url[shorturld] = longurl;
  shorturld++;
  res.json({ shorturl: shorturl, originalurl: longurl });
});

app.get("/api/shorturl/:id", function (req, res) {
  const id = parseInt(req.params.id);
  const longurl = url[id];
  if (url.hasOwnProperty(id)) {
    return res.redirect(301, longurl);
  } else {
    return res.status(404).json({ error: "url not found" });
  }
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
