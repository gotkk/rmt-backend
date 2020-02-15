const router = require('express-promise-router')();
const LandController = require('../controllers/landController');

router.route('/').get(LandController.getAllLand);
router.route('/').post(LandController.createLand);

module.exports = router;