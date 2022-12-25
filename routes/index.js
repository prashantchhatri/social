const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');


router.get('/index', homeController.index);
router.get('/create', homeController.create);


router.use('/users', require('./user'));







module.exports = router;