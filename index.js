const express = require('express');
const path = require('path');

const app = express();

//static serving
app.use(express.static(path.join(__dirname, 'public')));

//manual catch all
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || 8080, () => {
  console.log('App started');
});