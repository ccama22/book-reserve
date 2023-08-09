const { check } = require('express-validator');
const { validateErrors } = require('../middlewares/general.validator');
const { exitsUserbyId } = require('../helpers/userId.helpers');

const validatorIdUser = [
	check('id', 'El id debe ser un MongoID').isMongoId(),
	check('id').custom(exitsUserbyId),
	validateErrors,
];
module.exports = validatorIdUser;
