const Book = require('../models/Book.model');

const repeatBookId = async value => {
	const book = await Book.findById(value);
	if (!book) {
		throw new Error('El Libro no existe');
	}
};

module.exports = {
	repeatBookId,
};
