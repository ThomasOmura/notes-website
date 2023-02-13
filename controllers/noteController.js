const Note = require('../models/noteModel');

exports.list = (req, res) => {
  Note.find((err, notes) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.render('index', { notes });
    }
  });
};

exports.create = (req, res) => {
  const note = new Note({
    text: req.body.text
  });
  note.save((err, note) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.redirect('/');
    }
  });
};

exports.delete = (req, res) => {
  Note.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.redirect('/');
    }
  });
};
