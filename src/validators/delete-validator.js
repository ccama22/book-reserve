const { check } = require('express-validator');
const { exitsUserbyId } = require('../helpers/userId.helpers');

const validateDelete = [check('id').custom(exitsUserbyId)];
module.exports = validateDelete;
