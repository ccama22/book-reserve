const moment = require('moment/moment');
const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema(
	{
		user_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User', // Referencia a la colección de usuarios
			required: true,
		},
		book_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Book', // Referencia a la colección de libros
			required: true,
		},
		dateReserved: {
			type: Date,
			default: moment().format('YYYY-MM-DD HH:mm:ss'), // Formato con horas: "AAAA-MM-DD HH:mm:ss"
			required: false,
		},
		dateDue: {
			type: Date,
			default: function () {
				return moment(this.dateReserved).add(7, 'days').toDate();
			},
			required: false,
		},
	},
	{
		timestamps: false, // Desactiva los campos createdAt y updatedAt
	},
);

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
