const User = require('../models/User.model');

const listUser = async (req, res) => {
	try {
		const listUsers = await User.find();
		if (!listUsers.length) {
			res.status(204).json({
				msg: 'No hay usuarios en la BD',
			});

			return;
		}
		res.status(200).json({
			msg: 'lista de usuarios',
			users: listUsers,
		});
	} catch (error) {
		console.log(error);
	}
};

const createUser = async (req, res) => {
	try {
		const newUser = new User(req.body);
		const newUserSaved = await newUser.save();

		res.status(201).json({
			msg: 'Usuario creado correctamente',
			users: newUserSaved,
		});
	} catch (error) {
		console.lof(error);
	}
};

const updateUser = async (req, res) => {
	const { id } = req.params;
	try {
		const updateUser = await User.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		res.status(200).json({
			msg: 'usuario actualizado correctamente',
			users: updateUser,
		});
	} catch (error) {
		console.log(error);
	}
};

const deleteUser = async (req, res) => {
	const { id } = req.params;
	try {
		await User.findByIdAndDelete(id);
		res.status(200).json({
			msg: 'usuario eliminado correctamente',
		});
	} catch (error) {
		console.log(error);
	}
};

const getUser = async (req, res) => {
	const { id } = req.params;
	try {
		const user = await User.findById(id);
		res.status(200).json({
			msg: 'usuario encontrado',
			user,
		});
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	listUser,
	getUser,
	createUser,
	updateUser,
	deleteUser,
};
