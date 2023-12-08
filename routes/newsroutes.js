const express = require('express');
const { PrismaClient } = require('@prisma/client');

const router = express.Router();
const prisma = new PrismaClient();

// GET all books
router.get('/news', async (req, res) => {
  try {
    const books = await prisma.News.findMany();
    res.json({ success: true, data: books });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST a new book
router.post('/news', async (req, res) => {
  const { title, author, publishedDate } = req.body;

  try {
    const newBook = await prisma.players.create({
      data: {
        title,
        author,
        publishedDate,
      },
    });

    res.json({ success: true, data: newBook });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
