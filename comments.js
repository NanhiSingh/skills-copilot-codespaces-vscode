// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Set up body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Set up comments
const comments = [];

// Set up routes
app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  comments.push(comment);
  res.json(comment);
});

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}`);
});