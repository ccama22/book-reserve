const Book = require('../models/Book.model');

const listBook = async (req, res) => {
	try {
		const listBooks = await Book.find();
		if (!listBook.length) {
			res.status(204).json({
				msg: 'No hay libros en la BD',
			});

			return;
		}
		res.status(200).json({
			msg: 'lista de libros',
			books: listBooks,
		});
	} catch (error) {
		console.log(error);
	}
};

const createBook = async (req, res) => {
	try {
		const newBook = new Book(req.body);
		const newBookSaved = await newBook.save();

		res.status(201).json({
			msg: 'Book creado correctamente',
			book: newBookSaved,
		});
	} catch (error) {
		console.lof(error);
	}
};

const updateBook = async (req, res) => {
	const { id } = req.params;
	try {
		const updateBook = await Book.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		res.status(200).json({
			msg: 'libro actualizado correctamente',
			book: updateBook,
		});
	} catch (error) {
		console.log(error);
	}
};

const deleteBook = async (req, res) => {
	const { id } = req.params;
	try {
		await Book.findByIdAndDelete(id);
		res.status(200).json({
			msg: 'book eliminado correctamente',
		});
	} catch (error) {
		console.log(error);
	}
};
const getBook = async (req, res) => {
	const { id } = req.params;
	try {
		const book = await Book.findById(id);
		res.status(200).json({
			msg: 'libro encontrado',
			book,
		});
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	listBook,
	getBook,
	createBook,
	updateBook,
	deleteBook,
};
