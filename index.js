const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function (req, res) {
  res.render(path.join(__dirname + '/dist/index.html'))
});

app.listen(process.env.PORT || 8080, () => {
  console.log('App started');
});