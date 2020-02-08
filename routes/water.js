const router = require('express-promise-router')();
const WaterController = require('../controllers/waterController');

router.route('/').get(WaterController.getAllWater);

module.exports = router;