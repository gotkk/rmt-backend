const router = require('express-promise-router')();
const ElectricityController = require('../controllers/electricityController');

router.route('/').get(ElectricityController.getAllElectricity);
router.route('/:id').put(ElectricityController.updateElectricitytById);
router.route('/').post(ElectricityController.createElectricity);

module.exports = router;