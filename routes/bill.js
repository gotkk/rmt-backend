const router = require('express-promise-router')();
const BillController = require('../controllers/billController');

router.route('/').get(BillController.getAllBill);
router.route('/:id').get(BillController.getBillByTenantId);
router.route('/:id').put(BillController.updateBillStatusPaid);
router.route('/initialbill').post(BillController.createBill);
router.route('/tenant/:id').get(BillController.getBillByTenant);
router.route('/:id/unit').put(BillController.updateBillWithInsertUnit);

module.exports = router;