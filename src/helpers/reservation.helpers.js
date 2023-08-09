const Reservation = require('../models/Reservation.model');

const exitsReservationbyId = async id => {
	const reservation = await Reservation.findById(id);
	if (!reservation) {
		throw new Error('El reserva no existe');
	}
};

module.exports = {
	exitsReservationbyId,
};
