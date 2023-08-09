const moment = require('moment');

const validateDate = async value => {
	if (!moment(value, 'YYYY-MM-DD HH:mm:ss', true).isValid()) {
		throw new Error('El formato de fecha debe ser "YYYY-MM-DD HH:mm:ss"');
	}
	return true;
};

module.exports = validateDate;
