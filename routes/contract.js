const router = require('express-promise-router')();
const ContractController = require('../controllers/contractController');

router.route('/').get(ContractController.getAllContract);
router.route('/new').get(ContractController.getNewContracttNotHaveBill);
router.route('/:id').get(ContractController.getContractByTenantId);
router.route('/:id').put(ContractController.updateContractById);
router.route('/').post(ContractController.createContract);

module.exports = router;