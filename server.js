const path = require('path');
const express = require('express')
const config = require('./config/dev.config.js');
const envOr = require('./utils/envOr');
const PORT = envOr(`PORT`, 3001);
const HOST = envOr(`HOST`, 'localhost');
const app = express();

app.use(express.static(__dirname + '/dist'));
app.get('/', function response(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get('/api/test', function response(req, res) {
  return res.json({ test: 'hello' });
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
})
