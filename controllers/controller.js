const Model = require("../models/noteModel");

exports.index = (req, res) => {
  const data = Model.getData();
  res.render("index", { title: "Notes Application", data });
};

exports.about = (req, res) => {
  res.render("about", { title: "About Page" });
};
