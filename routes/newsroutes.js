const express = require('express');
const router = express.Router();

const newscontroller = require('../controllers/newscontrollers');

router.get('/books', newscontroller.getAllBooks);
router.post('/books', newscontroller.createBook);

module.exports = router;