const router = require('express-promise-router')();
const ContractController = require('../controllers/contractController');

router.route('/').get(ContractController.getAllContract);

module.exports = router;