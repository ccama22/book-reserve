const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: [true, 'El usuario es requerido'],
		},
		email: {
			type: String,
			required: [true, 'El correo es requerido'],
		},
	},
	{
		timestamps: true,
	},
);

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
