const express = require('express');
const app = express();
const path = require('path');

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})
app.get('/pick-menu.html', function (req, res) {
  res.render('pick-menu', {});
});
app.get('/push-ups/index.html', function (req, res) {
  res.render('push-ups/src/index', {});
});
app.use(express.static(path.join(__dirname, '/', 'pick-menu.html')));

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});