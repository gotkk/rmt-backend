
const Tenant = require('../models/tenant');
const Contract = require('../models/contract');
const Electricity = require('../models/electricity');
const Water = require('../models/water');
const Bill = require('../models/bill');

module.exports = {
    createTenant: (req, res, _next) => {
        let tenant = new Tenant({
            ...req.body
        })
        tenant.save()
            .then((result) => {
                res.status(200).json({ success: true, result: result })
            })
            .catch((err) => {
                res.status(400).json({ success: false, result: err })
            })
    },
    getAllTenant: (_req, res, _next) => {
        Tenant.find()
            .populate({
                path: 'contract',
                Model: Contract,
                populate: {
                    path: 'water',
                    model: Water
                },
                populate: {
                    path: 'electricity',
                    model: Electricity
                },
            })
            .populate({
                path: 'contract',
                Model: Contract,
                options: { sort: { 'ctstatus': -1 } },
                populate: {
                    path: 'water',
                    model: Water
                }
            })
            .populate({
                path: 'bill',
                Model: Bill
            })
            .exec()
            .then((result) => {
                res.status(200).json({ success: true, result: result });
            })
            .catch((err) => {
                res.status(400).json({ success: false, result: err });
            })

    },
    updateTenantWithLastBill: (req, res, _next) => {
        const { id } = req.params;
        Tenant.find({ _id: id })
            .then((tresult) => {
                Bill.find()
                    .then((result) => {
                        let lastbill = result[result.length - 1]._id;
                        let billtemp = tresult[0].bill;
                        billtemp = [...billtemp, lastbill]
                        let update_values = {
                            ...result,
                            bill: billtemp
                        }
                        Tenant.updateOne({ _id: id }, update_values)
                            .then((result) => {
                                res.status(200).json({ success: true, result: result })
                            })
                            .catch((err) => {
                                res.json({ success: false, result: err })
                            })
                    })
                    .catch((err) => {
                        res.json({ success: false, result: err })
                    })
            })
            .catch((err) => {
                res.json({ success: false, result: err })
            })
    },
    updateTenantById: (req, res, _next) => {
        const { id } = req.params;
        let update_values = {
            ...req.body
        }
        Tenant.updateOne({ _id: id }, update_values)
            .then((result) => {
                res.status(200).json({ success: true, result: result })
            })
            .catch((err) => {
                res.json({ success: false, result: err })
            })
    },
    getNewTenantNotHaveBill: (req, res, _next) => {
        Bill.find()
            .then((rsbill) => {
                Tenant.find()
                    .then((rstenant) => {
                        let result = [...rstenant];
                        for (let i = 0, arri = rstenant.length; i < arri; ++i) {
                            for (let j = 0, arrj = rsbill.length; j < arrj; ++j) {
                                if (rstenant[i]._id.toString() === rsbill[i].tenant[0]._id.toString() ) {
                                    result.splice(i,1);
                                    break;
                                }
                            }
                        }
                        res.status(200).json({ success: true, result: result });
                    })
                    .catch((err) => {
                        res.status(400).json({ success: false, result: err });
                    })
            })
            .catch((err) => {
                res.status(400).json({ success: false, result: err });
            })
    }
}