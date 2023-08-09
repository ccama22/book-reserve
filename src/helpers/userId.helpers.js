const User = require('../models/User.model');

const exitsUserbyId = async id => {
	const user = await User.findById(id);
	if (!user) {
		throw new Error('El usuario no existe');
	}
};

module.exports = {
	exitsUserbyId,
};
