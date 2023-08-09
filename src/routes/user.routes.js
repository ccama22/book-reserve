const { Router } = require('express');
const userCon = require('../controllers/user.controllers');
const { validatorUser, validatorId } = require('../validators');

const router = Router();

const userRoutes = app => {
	app.use('/api/v1/user', router);

	router.get('/list', userCon.listUser);
	router.get('/:id', validatorId, userCon.getUser);

	router.post('/new', validatorUser, userCon.createUser);
	router.put('/:id', validatorId, userCon.updateUser);
	router.delete('/:id', validatorId, userCon.deleteUser);
};
module.exports = userRoutes;
