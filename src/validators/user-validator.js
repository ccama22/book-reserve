const { check, body } = require('express-validator');
const { exitsEmailUser } = require('../helpers');
const { validateErrors } = require('../middlewares/general.validator');

const validateUser = [
	check('username', 'El nombre del usuario es requerido').not().isEmpty(),
	check('email', 'El correo es requerido').isEmail(),
	body('email').isEmail().withMessage('Debe ser un correo electrónico válido'),
	check('email').custom(exitsEmailUser),
	validateErrors,
];
module.exports = validateUser;
