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

// Server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
















// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();
// const notesRouter = require('./routes/notes');
// const Note = require('./models/Note');
 
// // MongoDB
// const url = "mongodb+srv://dbnotes:dbnotes@notes-app.gbu1ru6.mongodb.net/?retryWrites=true&w=majority"
// mongoose.connect(url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // View engine
// app.set("view engine", "ejs");
// app.set("views", "./views");

// // Middleware
// app.use(express.urlencoded({ extended: false }));

// // Routes
// app.use('/', notesRouter);

// // Actions
// app.post('/new', async (req, res) => {
//   const { title, content } = req.body;
//   const note = new Note({ title, content });
//   await note.save();
//   res.redirect('/');
// });

// // Error handlers (middleware)
// app.use((err, req, res, next) => {
//   res.status(500);
//   res.render("error", { errorMessage: err.message });
// });

// app.use((req, res, next) => {
//   res.status(404);
//   res.render("error", { errorMessage: "Sorry page not found" });
// });

// // Server
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`App listening at http://localhost:${port}`);
// });
