const express = require('express');
const router = express.Router();

const newsController = require('../controllers/newsControllers');

router.get('/news', newsController.getAllNews);
router.post('/news', newsController.createNews);

module.exports = router;