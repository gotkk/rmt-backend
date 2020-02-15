const router = require('express-promise-router')();
const TenantController = require('../controllers/tenantController');

router.route('/').get(TenantController.getAllTenant);
router.route('/').post(TenantController.createTenant);
router.route('/:id/lastbill').put(TenantController.updateTenantWithLastBill);
router.route('/:id').put(TenantController.updateTenantById);


module.exports = router;