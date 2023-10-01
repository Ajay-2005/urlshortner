require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const validurl = require('valid-url');
const db = require("./db")
// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});


let shorturlid = 1;

app.post("/api/shorturl", async function (req, res) {
  const longurl = req.body.url;
  if (!validurl.isUri(longurl)) {
    return res.status(400).json({ error: 'invalid url' });
  }
  const shorturl = createShortUrl(shorturlid);
  const urlData = { urlid: shorturlid, shorturl: shorturl, orginal_url: longurl };
  shorturlid++; // Increment after creating the short URL

  const collection = await db.get("urls").collection("urldata")
  collection.insertOne(urlData, (err) => {
    if (err) {
      console.log("Error in inserting data in mongodb" + err)
      res.status(500).json("internal server error")
    }
  })
  res.json({ shorturl: shorturl, orginal_url: longurl })
});

app.get("/api/shorturl/:id", async function (req, res) {
  const id = parseInt(req.params.id);
  
  const data = await db.get("urls").collection("urldata").findOne({urlid:id})
 

  if (data) {
    return res.redirect(301,data.orginal_url);
  } else {
    return res.status(404).json({ error: "url not found" });
  }
});

function createShortUrl(id) {
  return `${process.env.BASE_URL || 'http://localhost'}:${port}/api/shorturl/${id}`;
}

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
db.connect((err) => {
  if (err) {
    console.log("database connection error")
  }
  else {
    console.log("successfully connected database")
  }
})