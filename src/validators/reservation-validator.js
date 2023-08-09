const { check } = require('express-validator');
const { exitsReservationbyId, validateDate } = require('../helpers');
const { validateErrors } = require('../middlewares/general.validator');

const validateReservation = [
	check('user_id', 'El id del usuario es requerido').notEmpty(),
	check('user_id')
		.custom(exitsReservationbyId)
		.withMessage('El usuario no existe'),

	check('book_id', 'El id del libro es requerido').notEmpty(),
	check('book_id')
		.custom(exitsReservationbyId)
		.withMessage('El libro no existe'),

	check('dateReserved', 'La fecha de reservación es requerida').notEmpty(),
	check('dateReserved').custom(validateDate),
	check('dateDue', 'La fecha de vencimiento es requerida').notEmpty(),
	check('dateDue').custom(validateDate),
	validateErrors,
];
module.exports = validateReservation;
