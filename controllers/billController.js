
const Bill = require('../models/bill');

module.exports = {
    getAllBill: (_req, res, _next) => {
        Bill.find()
            .then((result) => {
                res.status(200).json({ success: true, result: result });
            })
            .catch((err) => {
                res.status(400).json({ success: false, result: err });
            })
    },
}