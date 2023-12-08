const bookService = require('../service/newsservice');

async function getAllBooks(req, res)  {
  const news = await newsservice.getAllBooks();

  res.json(news);
};

async function createBook(req, res) {
  const news = req.body;

  const creatednews = await newsservice.createBook(news);
  res.status(201).json(creatednews);
};

module.exports = {
  getAllBooks,
  createBook
};
