const Model = require('../models/model');

exports.index = (req, res) => {
  const data = Model.getData();
  res.render('index', { title: 'Notes Application', data });
};

exports.add = (req, res) => {
  const newData = req.body.name;
  Model.addData(newData);
  res.redirect('/');
};

exports.remove = (req, res) => {
  const id = req.params.id;
  Model.removeData(id);
  res.redirect('/');
};

exports.about = (req, res) => {
  res.render('about', { title: 'About Page' });
};
