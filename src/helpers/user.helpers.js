const UserModel = require('../models/User.model');

const exitsEmailUser = async value => {
	const user = await UserModel.findOne({ email: value });
	if (user) throw new Error('El correo ya se encuentra registrado');
	return true;
};

module.exports = exitsEmailUser;
