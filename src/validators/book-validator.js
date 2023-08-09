const { check } = require('express-validator');
const { validateErrors } = require('../middlewares/general.validator');

const validatorBook = [
	check('title')
		.not()
		.notEmpty()
		.withMessage('El titulo del libro es requerido')
		.isString()
		.withMessage('El titulo del libro debe ser un string')
		.isLength({
			min: 5,
		})
		.withMessage('El titulo del libro debe contener al menos 5 caracteres'),
	check('author')
		.not()
		.notEmpty()
		.withMessage('El titulo del autor es requerido')
		.isString()
		.withMessage('El titulo del autor debe ser un string')
		.isLength({
			min: 5,
		})
		.withMessage('El autor del libro debe contener al menos 5 caracteres'),
	validateErrors,
];
module.exports = validatorBook;
