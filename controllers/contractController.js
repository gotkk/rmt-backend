
const Contract = require('../models/contract');
const Tenant = require('../models/tenant');
const Bill = require('../models/bill');
const Land = require('../models/land');
const Water = require('../models/water');
const Electricity = require('../models/electricity');

module.exports = {
    createContract: (req, res, _next) => {
        let contract = new Contract({
            ...req.body
        })
        contract.save()
            .then(result => {
                res.status(200).json({ success: true, result: result });
            })
            .catch((err) => {
                res.status(400).json({ success: false, result: err });
            })
    },
    getAllContract: (_req, res, _next) => {
        Contract.find()
            .populate({
                path: 'tenant',
                models: Tenant
            })
            .exec()
            .then((result) => {
                res.status(200).json({ success: true, result: result });
            })
            .catch((err) => {
                res.status(400).json({ success: false, result: err });
            })

    },
    updateContractById: (req, res, _next) => {
        const { id } = req.params;
        let update_values = {
            ...req.body
        }
        Contract.updateOne({ _id: id }, update_values)
            .then((result) => {
                res.status(200).json({ success: true, result: result })
            })
            .catch((err) => {
                res.json({ success: false, result: err })
            })
    },
    getContractByTenantId: (req, res, _next) => {
        const { id } = req.params;
        Contract.find({ tenant: { $in: [id] } })
            .then((result) => {
                res.status(200).json({ success: true, result: result })
            })
            .catch((err) => {
                res.json({ success: false, result: err })
            })
    },
    getNewContracttNotHaveBill: (req, res, _next) => {
        Bill.find()
            .then((rsbill) => {
                Contract.find()
                    .populate({
                        path: 'tenant',
                        models: Tenant
                    })
                    .exec()
                    .then((cttenant) => {
                        let result = [...cttenant];
                        for (let i = 0, arri = cttenant.length; i < arri; ++i) {
                            for (let j = 0, arrj = rsbill.length; j < arrj; ++j) {
                                if (cttenant[i]._id.toString() === rsbill[j].contract[0]._id.toString()) {
                                    // result.splice(i, 1);
                                    delete result[i];
                                    break;
                                }

                            }
                        }
                        result = result.filter(function (el) {
                            return el != null;
                        });
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