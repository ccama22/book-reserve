const User = require('../models/User.model');

const repeatUserbyId = async value => {
	const user = await User.findById(value);
	if (!user) {
		throw new Error('El usuario no existe');
	}
};

module.exports = {
	repeatUserbyId,
};
