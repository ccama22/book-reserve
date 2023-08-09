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
			Reservacion: listReservation,
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
			msg: 'Reservacion creado correctamente',
			reservation: newReservationSaved,
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
			reservation: updateReservation,
		});
	} catch (error) {
		console.log(error);
	}
};

const deleteReservation = async (req, res) => {
	const { id } = req.params;
	try {
		const reservation = await Reservation.findByIdAndDelete(id);
		res.status(200).json({
			method: 'Delete',
			msg: 'reservacion eliminado correctamente',
			reservation,
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
			msg: 'Reservacion encontrado',
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
