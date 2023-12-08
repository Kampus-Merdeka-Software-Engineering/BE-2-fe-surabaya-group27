const express = require('express');
const router = express.Router();

const bookController = require('../controllers/newscontrollers');

router.get('/books', bookController.getAllBooks);
router.post('/books', bookController.createBook);

module.exports = router;