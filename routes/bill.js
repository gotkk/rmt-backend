const router = require('express-promise-router')();
const BillController = require('../controllers/billController');

router.route('/').get(BillController.getAllBill);

module.exports = router;