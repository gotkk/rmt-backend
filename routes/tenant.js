const router = require('express-promise-router')();
const TenantController = require('../controllers/tenantController');

router.route('/').get(TenantController.getAllTenant);

module.exports = router;