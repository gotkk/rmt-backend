const router = require('express-promise-router')();
const TenantController = require('../controllers/tenantController');

router.route('/').get(TenantController.getAllPath);

module.exports = router;