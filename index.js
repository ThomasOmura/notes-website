const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const noteRouter = require('./routes/noteRoutes');
const router = require('./routes/router');

// App
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// DB
const url = "mongodb+srv://dbnotes:dbnotes@notes-app.gbu1ru6.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Router
app.use('/', noteRouter);
app.use('/', router);

// Error handlers
app.use((err, req, res, next) => {
  res.status(500);
  res.render("error", { errorMessage: err.message });
});

app.use((req, res, next) => {
  res.status(404);
  res.render("error", { errorMessage: "Sorry page not found" });
});

// Server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
