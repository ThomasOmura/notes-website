const express = require('express');
const app = express();
const router = require('./routes/index');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', './views');

const controller = require('./controllers/controller');

app.use('/', router);

// Error handlers (middleware)
app.use((err, req, res, next) => {
    res.status(500);
    res.render('error', { errorMessage: err.message });
  });  

app.use((req, res, next) => {
    res.status(404);
    res.render('error', { errorMessage: 'Sorry page not found' });
});

// Define port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
