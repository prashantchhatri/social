const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');


router.get('/', homeController.home)

router.get('/test', homeController.test);
router.use('/users', require('./user'));







module.exports = router;