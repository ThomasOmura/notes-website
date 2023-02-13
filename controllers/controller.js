const Model = require("../models/noteModel");

exports.index = (req, res) => {
  const data = Model.getData();
  res.render("index", { title: "Notes Application", data });
};

exports.about = (req, res) => {
  res.render("about", { title: "About Page" });
};

// exports.login = (req, res) => {
//   res.render("login");
// };

// exports.loginForm = (req, res) => {
//   res.render("login");
// };

// //LOGIN PAGE
// exports.login = (req, res) => {
//   // Extract the username and password from the form submissions
//   const username = req.body.username;
//   const password = req.body.password;

//   // Check if the username and password match the expected values
//   if (username === "admin" && password === "password") {
//     res.redirect("/");
//   } else {
//     res.render("login", { errorMessage: "Incorrect username or password" });
//   }
// };