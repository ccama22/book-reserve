// Función de validación para verificar que la fecha de vencimiento sea mayor a la fecha de reserva
const validateDateDue = (value, { req }) => {
	const dateReserved = new Date(req.body.dateReserved);
	const dateDue = new Date(value);
	if (dateDue > dateReserved) {
		return true;
	}
	throw new Error(
		'La fecha de vencimiento debe ser mayor a la fecha de reserva',
	);
};
module.exports = {
	validateDateDue,
};
