const { check } = require('express-validator');
const { validateErrors } = require('../middlewares/general.validator');
const { exitsBookbyId } = require('../helpers/book.helpers');

const validatorID = [
	check('id', 'El id debe ser un MongoID').isMongoId(),
	check('id').custom(exitsBookbyId),
	validateErrors,
];
module.exports = validatorID;
