const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./routes/index");
 
//DB
const url = "mongodb+srv://dbnotes:dbnotes@notes-app.gbu1ru6.mongodb.net/?retryWrites=true&w=majority"
async function connect() {
try {
  await mongoose.connect(url);
  console.log("Connected TO MONGODB")
} catch (err) {
  console.log(err)
}
}
connect();
//

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "./views");

const controller = require("./controllers/controller");

app.use("/", router);

app.get("/login", (req, res) => {
  res.render("login");
});

// Error handlers (middleware)
app.use((err, req, res, next) => {
  res.status(500);
  res.render("error", { errorMessage: err.message });
});

app.use((req, res, next) => {
  res.status(404);
  res.render("error", { errorMessage: "Sorry page not found" });
});

// Define port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
