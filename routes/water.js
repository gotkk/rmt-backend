const router = require('express-promise-router')();
const WaterController = require('../controllers/waterController');

router.route('/').get(WaterController.getAllWater);
router.route('/:id').get(WaterController.getWaterByContractId);
router.route('/:id').put(WaterController.updateWaterById);
router.route('/').post(WaterController.createWater);

module.exports = router;