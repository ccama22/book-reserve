const { Router } = require('express');
const userCon = require('../controllers/user.controllers');
const { validatorUser } = require('../validators');
const validatorIdUser = require('../validators/useId-validator');

const router = Router();

const userRoutes = app => {
	app.use('/api/v1/user', router);

	router.get('/list', userCon.listUser);
	router.get('/:id', validatorIdUser, userCon.getUser);

	router.post('/new', validatorUser, userCon.createUser);
	router.put('/:id', validatorIdUser, userCon.updateUser);
	router.delete('/:id', validatorIdUser, userCon.deleteUser);
};
module.exports = userRoutes;
