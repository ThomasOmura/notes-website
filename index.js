const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const noteRouter = require("./routes/noteRoutes");
const router = require("./routes/router");
const path = require("path");

// App
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// Set the 'strictQuery' option to 'false'
mongoose.set("strictQuery", false);

// DB
const url =
  "mongodb+srv://dbnotes:dbnotes@notes-app.gbu1ru6.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const LogInSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = new mongoose.model("logincollection", LogInSchema);
module.exports = collection;

// Router
app.use("/", noteRouter);
app.use("/", router);

// Error handlers
app.use((err, req, res, next) => {
  res.status(500);
  res.render("error", { errorMessage: err.message });
});

// Login
app.get("/login", (req, res) => {
  res.render("login");
});

//Signup
app.get("/signup", (req, res) => {
  res.render("signup");
});

app.post("/signup", async (req, res) => {
  const data = {
    name: req.body.name,
    password: req.body.password,
  };

  await collection.insertMany([data]);

  res.redirect("/");
});

app.post("/login", async (req, res) => {
  try {
    const check = await collection.findOne({ name: req.body.name });
    if (check.password === req.body.password) {
      return res.redirect("/");
    } else {
      return res.send("wrong password");
    }
  } catch {
    return res.send("wrong details");
  }
});

app.use((req, res, next) => {
  res.status(404);
  res.render("error", { errorMessage: "Sorry page not found" });
});

// Server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
