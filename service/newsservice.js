const prisma = require('../config/prisma');

async function getAllBooks() {
  try {
    const news = await prisma.news.findMany();

    return news;
  } catch (err) {
    throw err;
  }
};

async function createBook(news) {
  console.log(news);
  try {
    return await prisma.book.create({
      data: news
    });
  } catch (err) {
    throw err;
  }
}

module.exports = {
  getAllBooks,
  createBook
};
