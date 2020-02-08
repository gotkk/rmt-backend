const router = require('express-promise-router')();
const LandController = require('../controllers/landController');

router.route('/').get(LandController.getAllLand);

module.exports = router;