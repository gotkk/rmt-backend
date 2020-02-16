
const Contract = require('../models/contract');
const Tenant = require('../models/tenant');
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
            .populate({
                path: 'land',
                models: Land
            })
            .populate({
                path: 'water',
                models: Water
            })
            .populate({
                path: 'electricity',
                models: Electricity
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

}