const router = require('express-promise-router')();
const ElectricityController = require('../controllers/electricityController');

router.route('/').get(ElectricityController.getAllElectricity);

module.exports = router;