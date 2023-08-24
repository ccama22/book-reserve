const { check, body } = require('express-validator');
const { validateErrors } = require('../middlewares/general.validator');
const { exitsUserbyId } = require('../helpers/userId.helpers');

const validatorIdUser = [
	check('id', 'El id debe ser un MongoID').isMongoId(),
	check('username', 'El nombre del usuario es requerido').not().isEmpty(),
	check('email', 'El correo es requerido').isEmail(),
	body('email').isEmail().withMessage('Debe ser un correo electrónico válido'),
	check('id').custom(exitsUserbyId),
	validateErrors,
];
module.exports = validatorIdUser;
