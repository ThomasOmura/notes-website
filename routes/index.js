const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

// Getters
router.get('/', controller.index);
router.get('/about', controller.about);
router.get('/remove/:id', controller.remove);

// Setters
router.post('/add', controller.add);


module.exports = router;
