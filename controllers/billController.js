
const Bill = require('../models/bill');
const Tenant = require('../models/tenant');

module.exports = {
    createBill: (req, res, _next) => {
        let bill = new Bill({
            ...req.body
        })
        bill.save()
            .then((result) => {
                res.status(200).json({ success: true, result: result })
            })
            .catch((err) => {
                res.status(400).json({ success: false, result: err })
            })
    },
    getAllBill: (_req, res, _next) => {
        Bill.find()
            .populate({
                path: "tenant",
                model: Tenant
            })
            .then((result) => {
                res.status(200).json({ success: true, result: result });
            })
            .catch((err) => {
                res.status(400).json({ success: false, result: err });
            })
    },
    getBillByTenant: (req, res, _next) => {
        const { id } = req.params;
        Bill.find({ tenant: id })
            .then((result) => {
                res.status(200).json({ success: true, result: result });
            })
            .catch((err) => {
                res.status(400).json({ success: false, result: err });
            })
    },
    updateBillWithInsertUnit:  (req, res, _next) => {
        const { id } = req.params;
        let update_values = {
            ...req.body
        }
        Bill.updateOne({ _id: id }, update_values)
            .then((result) => {
                res.status(200).json({ success: true, result: result });
            })
            .catch((err) => {
                res.status(400).json({ success: false, result: err });
            })
    },
}