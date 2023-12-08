const newsService = require('../services/newsService');

async function getAllNews(req, res)  {
  const news = await newsService.getAllNews();

  res.json(news);
};

async function createNews(req, res) {
  const news = req.body;

  const createdNews = await newsService.createNews(news);
  res.status(201).json(createdNews);
};

module.exports = {
  getAllNews,
  createNews
};