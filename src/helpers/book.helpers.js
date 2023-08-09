const Book = require('../models/Book.model');

const exitsBookbyId = async id => {
	const book = await Book.findById(id);
	if (!book) {
		throw new Error('El Libro no existe');
	}
};

module.exports = {
	exitsBookbyId,
};
