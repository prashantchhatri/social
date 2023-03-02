const express = require('express');
const router = express.Router();
const passport = require('passport');

const homeController = require('../controllers/home_controller');


router.get('/', homeController.index);
router.get('/create', homeController.create);


router.use('/users', require('./user'));
router.use('/posts', require('./posts'))







module.exports = router;