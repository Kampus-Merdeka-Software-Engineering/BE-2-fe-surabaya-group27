const newsService = require('../services/newsservice');

async function getAllNews(req, res)  {
  const news = await newsService.getAllNews();

  res.json(news);
};

async function createNews(req, res) {
  try {
    const news = req.body;
    const createdNews = await newsService.createNews(news);
    res.status(201).json(createdNews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllNews,
  createNews
};