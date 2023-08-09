const { Router } = require('express');
const reservaCon = require('../controllers/reservation.controllers');
const { validateReservation } = require('../validators');
const validatorIdReservation = require('../validators/reservationId-validator');

const router = Router();
const reservationRoutes = app => {
	app.use('/api/v1/reservation', router);

	router.get('/list', reservaCon.listReservation);
	router.get('/:id', validatorIdReservation, reservaCon.getReservation);

	router.post('/new', validateReservation, reservaCon.createReservation);
	router.put(
		'/:id',
		validateReservation,
		validatorIdReservation,
		reservaCon.updateReservation,
	);
	router.delete('/:id', validatorIdReservation, reservaCon.deleteReservation);
};
module.exports = reservationRoutes;
