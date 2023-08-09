const { Router } = require('express');
const bookCon = require('../controllers/book.controllers');
const { validatorBook, validatorId } = require('../validators');

const router = Router();

const bookRoutes = app => {
	app.use('/api/v1/book', router);

	router.get('/list', bookCon.listBook);
	router.get('/:id', validatorId, bookCon.getBook);

	router.post('/new', validatorBook, bookCon.createBook);
	router.put('/:id', validatorBook, validatorId, bookCon.updateBook);
	router.delete('/:id', validatorId, bookCon.deleteBook);
};

module.exports = bookRoutes;
