const express = require('express');
const noteController = require('../controllers/noteController');

const router = express.Router();

router.get('/', noteController.list);
router.post('/create', noteController.create);
router.delete('/:id', noteController.delete);

module.exports = router;
