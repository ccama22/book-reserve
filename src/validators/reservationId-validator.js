const { check } = require('express-validator');
const { validateErrors } = require('../middlewares/general.validator');
const { exitsReservationbyId } = require('../helpers/reservation.helpers');

const validatorIdReservation = [
	check('id', 'El id debe ser un MongoID').isMongoId(),
	check('id').custom(exitsReservationbyId),
	validateErrors,
];
module.exports = validatorIdReservation;
