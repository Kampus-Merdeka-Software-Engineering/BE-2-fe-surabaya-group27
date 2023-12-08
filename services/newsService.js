const prisma = require('../config/prisma');

async function getAllNews() {
  try {
    const news = await prisma.news.findMany();

    return news;
  } catch (err) {
    throw err;
  }
};

async function createNews(news) {
  console.log(news);
  try {
    await prisma.news.create({
      data: news
    });
  } catch (err) {
    throw err;
  }
}

module.exports = {
  getAllNews,
  createNews
};