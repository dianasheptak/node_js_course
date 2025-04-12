const Router = require('../framework/router');
const controller = require('./user-controller');
const router = new Router();
const mongoose = require('mongoose');

router.get('/users', controller.getUsers)

router.post('/users', controller.createUser)

module.exports = router;
