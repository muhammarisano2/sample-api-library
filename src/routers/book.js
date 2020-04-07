const express = require('express');
const Router = express.Router();
const bookController = require('../controller/book');
const authHelper = require('../helpers/auth');
const cors = require('cors');

Router
  .get('/', authHelper.verify, bookController.getBooks)
  .get('/:id_book', authHelper.verify ,bookController.bookDetail)
  .post('/', bookController.insertBook)
  .patch('/:id_book', bookController.updateBook)
  .delete('/:id_book', bookController.deleteBook)
  // .post('/insert', (req, res) => res.send('ini buku ke 1'))

module.exports = Router;