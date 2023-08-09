const { Router } = require('express');
const reservaCon = require('../controllers/reservation.controllers');
const { validatorId } = require('../validators');

const router = Router();
const reservationRoutes = app => {
	app.use('/api/v1/reservation', router);

	router.get('/list', reservaCon.listReservation);
	router.get('/:id', validatorId, reservaCon.getReservation);

	router.post('/new', reservaCon.createReservation);
	router.put('/:id', validatorId, reservaCon.updateReservation);
	router.delete('/:id', validatorId, reservaCon.deleteReservation);
};
module.exports = reservationRoutes;
