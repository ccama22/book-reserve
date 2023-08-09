const Reservation = require('../models/Reservation.model');

const listReservation = async (req, res) => {
	try {
		const listReservation = await Reservation.find();
		if (!listReservation.length) {
			res.status(204).json({
				msg: 'No hay reservacion en la BD',
			});

			return;
		}
		res.status(200).json({
			msg: 'lista de reservacion',
			books: listReservation,
		});
	} catch (error) {
		console.log(error);
	}
};
const createReservation = async (req, res) => {
	try {
		const newReservation = new Reservation(req.body);
		const newReservationSaved = await newReservation.save();

		res.status(201).json({
			msg: 'Usuario creado correctamente',
			book: newReservationSaved,
		});
	} catch (error) {
		console.lof(error);
	}
};

const updateReservation = async (req, res) => {
	const { id } = req.params;
	try {
		const updateReservation = await Reservation.findByIdAndUpdate(
			id,
			req.body,
			{
				new: true,
			},
		);
		res.status(200).json({
			msg: 'reservacion actualizado correctamente',
			book: updateReservation,
		});
	} catch (error) {
		console.log(error);
	}
};

const deleteReservation = async (req, res) => {
	const { id } = req.params;
	try {
		await Reservation.findByIdAndDelete(id);
		res.status(200).json({
			msg: 'reservacion eliminado correctamente',
		});
	} catch (error) {
		console.log(error);
	}
};

const getReservation = async (req, res) => {
	const { id } = req.params;
	try {
		const reservation = await Reservation.findById(id);
		res.status(200).json({
			msg: 'reservacion encontrado',
			reservation,
		});
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	listReservation,
	createReservation,
	updateReservation,
	deleteReservation,
	getReservation,
};
