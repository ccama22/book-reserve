const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, 'El titulo del Producto es requerido'],
		},
		author: {
			type: String,
			required: [true, 'El titulo del Autor es requerido'],
		},
		available: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	},
);

const BookModel = mongoose.model('Book', bookSchema);

module.exports = BookModel;
