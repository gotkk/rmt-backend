
const Electricity = require('../models/electricity');
const Contract = require('../models/contract');
const Land = require('../models/land');

module.exports = {
    createElectricity: (req, res, _next) => {
        let elect = new Electricity({
            ...req.body
        })
        elect.save()
            .then(result => {
                res.status(200).json({ success: true, result: result });
            })
            .catch((err) => {
                res.status(400).json({ success: false, result: err });
            })
    },
    getAllElectricity: (_req, res, _next) => {
        Electricity.find()
            .populate({
                path: 'contract',
                Model: Contract,
            })
            .populate({
                path: 'land',
                models: Land
            })
            .exec()
            .then((result) => {
                res.status(200).json({ success: true, result: result });
            })
            .catch((err) => {
                res.status(400).json({ success: false, result: err });
            })
    },
    updateElectricitytById: (req, res, _next) => {
        const { id } = req.params;
        let update_values = {
            ...req.body
        }
        Electricity.updateOne({ _id: id }, update_values)
            .then((result) => {
                res.status(200).json({ success: true, result: result })
            })
            .catch((err) => {
                res.json({ success: false, result: err })
            })
    },
    getElectricityByContractId: (req, res, _next) => {
        const { id } = req.params;
        Electricity.find({ contract: { $in: [id] } })
            .then((result) => {
                res.status(200).json({ success: true, result: result })
            })
            .catch((err) => {
                res.json({ success: false, result: err })
            })
    },
}