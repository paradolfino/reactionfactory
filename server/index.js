const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/api', function (req, res) {
  res.set('Content-Type', 'application/json');
});

app.get('*', function(request, response) {
  response.sendfile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});